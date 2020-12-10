FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-12

# Install Linux Cypress deps
RUN apt-get update && \
  apt-get install -y \
    libgtk2.0-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libgbm-dev \
    xvfb