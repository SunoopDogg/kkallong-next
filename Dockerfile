FROM node:22.19.0-trixie-slim

ENV DEBIAN_FRONTEND=noninteractive

# curl and ca-certificates dependencies
RUN apt-get update \
    && apt-get install -y \
        curl \
        ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# git and git-lfs dependencies
RUN apt-get update \
    && apt-get install -y \
        git \
        git-lfs \
    && rm -rf /var/lib/apt/lists/*
RUN git lfs install

WORKDIR /root