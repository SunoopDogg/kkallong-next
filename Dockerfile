FROM debian:trixie-slim

ENV DEBIAN_FRONTEND=noninteractive

# Core utilities
RUN apt update \
    && apt install -y --no-install-recommends \
        ca-certificates \
        curl \
        libatomic1 \
        unzip \
    && rm -rf /var/lib/apt/lists/*

# Git
RUN apt update \
    && apt install -y --no-install-recommends \
        git \
    && rm -rf /var/lib/apt/lists/*

# GUI / Rendering libraries
RUN apt update \
    && apt install -y --no-install-recommends \
        libgl1 \
        libgtk2.0-dev \
        tk \
    && rm -rf /var/lib/apt/lists/*

# Non-root user
ARG USERNAME=dev
ARG UID=1000
ARG GID=1000
RUN groupadd --gid $GID $USERNAME \
    && useradd --uid $UID --gid $GID -m -s /bin/bash $USERNAME

USER $USERNAME
WORKDIR /home/$USERNAME

# uv installation
ENV PATH=/home/$USERNAME/.local/bin:$PATH
RUN curl -LsSf https://astral.sh/uv/install.sh | sh

# nvm installation
ENV PATH=/home/$USERNAME/.nvm/current/bin:$PATH
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
RUN bash -c '. ~/.nvm/nvm.sh && NVM_SYMLINK_CURRENT=true nvm install --lts'

# bun installation
ENV PATH=/home/$USERNAME/.bun/bin:$PATH
RUN curl -fsSL https://bun.sh/install | bash
