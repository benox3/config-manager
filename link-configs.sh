#!/bin/bash
#
# Set up symlinks and configs for config-manager

CONFIG_DIR=$HOME/.config
mkdir -p $CONFIG_DIR

BACKUP_CONFIGS_DIR=$PWD/backups/$(date '+%d-%b-%Y-%s')
mkdir -p $BACKUP_CONFIGS_DIR

# zsh
mv $HOME/.zshrc $BACKUP_CONFIGS_DIR
ln -fsn $PWD/zsh/.zshrc $HOME/.zshrc

# neovim
mv $HOME/.config/nvim $BACKUP_CONFIGS_DIR
ln -fsn $PWD/nvim $HOME/.config
mv $HOME/.vimrc $BACKUP_CONFIGS_DIR
ln -fsn $HOME/.config/nvim/init.vim $HOME/.vimrc

# alacritty
mv $HOME/.config/alacritty $BACKUP_CONFIGS_DIR
ln -fsn $PWD/alacritty $HOME/.config

# tmux
mv $HOME/.tmux $BACKUP_CONFIGS_DIR
mkdir -p $HOME/.tmux
ln -fsn $PWD/tmux/plugins $HOME/.tmux/plugins
mv $HOME/.tmux.conf $BACKUP_CONFIGS_DIR
ln -fsn $PWD/tmux/.tmux.conf $HOME

