FROM python:3.14.2-slim-trixie

ENV DEBIAN_FRONTEND=noninteractive \
    PATH="/root/.local/bin:$PATH"

# Update package lists
RUN apt-get update

# Core utilities
RUN apt-get install -y --no-install-recommends \
        curl \
        unzip

# Git and Git LFS
RUN apt-get install -y --no-install-recommends \
        git \
        git-lfs \
    && git lfs install

# GUI / Rendering libraries
RUN apt-get install -y --no-install-recommends \
        libgl1 \
        libgtk2.0-dev \
        tk \

# uv (Python)
RUN curl -LsSf https://astral.sh/uv/install.sh | sh

# bun (JavaScript)
RUN curl -fsSL https://bun.sh/install | bash

# Clean up
RUN apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /root