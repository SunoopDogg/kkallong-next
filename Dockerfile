FROM debian:trixie-slim

ENV DEBIAN_FRONTEND=noninteractive

# Update package lists
RUN apt update

# Core utilities
RUN apt install -y --no-install-recommends \
        ca-certificates \
        curl \
        libatomic1 \
        unzip

# Git
RUN apt install -y --no-install-recommends \
        git

# GUI / Rendering libraries
RUN apt install -y --no-install-recommends \
        libgl1 \
        libgtk2.0-dev \
        tk

# Clean up
RUN apt clean \
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
RUN curl -LsSf https://astral.sh/uv/install.sh | sh

# nvm installation
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
ENV NVM_DIR=/home/$USERNAME/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install --lts

# bun installation
RUN curl -fsSL https://bun.sh/install | bash
