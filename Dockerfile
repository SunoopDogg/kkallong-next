FROM python:3.14.2-slim-trixie

ENV DEBIAN_FRONTEND=noninteractive \
    PATH="/root/.local/bin:$PATH"

# curl dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl 

# git and git-lfs dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        git-lfs
RUN git lfs install

# GUI / Rendering dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        libgtk2.0-dev \
        libgl1 \
        tk 

# uv installer
RUN curl -LsSf -o /tmp/uv-installer.sh https://astral.sh/uv/install.sh \
	&& sh /tmp/uv-installer.sh \
	&& rm /tmp/uv-installer.sh

# install unzip utility
RUN apt-get install -y --no-install-recommends unzip

# bun installer
RUN curl -fsSL https://bun.sh/install | bash

# cleanup apt cache
RUN apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /root