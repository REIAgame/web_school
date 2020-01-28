FROM gitpod/workspace-full-vnc

USER root

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && \
#     sudo apt-get install -yq bastet && \
#     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/42_config_docker/
COPY ["google-chrome-stable_current_amd64.deb","/google-chrome-stable_current_amd64.deb"]
RUN pwd
RUN ls -l /
RUN apt -y update && \
    apt -y install libnss3 && \
    apt -y install libnspr4 && \
    apt -y install google-chrome-stable_current_amd64.deb
