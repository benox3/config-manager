#!/bin/bash

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

# Temp Dir
INSTALL_DIR=./installs

# Alacritty
brew cask install alacritty

# Dein
DEIN_INSTALL_DIR=$INSTALL_DIR/dein
curl https://raw.githubusercontent.com/Shougo/dein.vim/master/bin/installer.sh > $DEIN_INSTALL_DIR/installer.sh
# For example, we just use `~/.cache/dein` as installation directory
sh $DEIN_INSTALL_DIR/installer.sh ~/.cache/dein

# Neovim
brew install neovim

# Silver-searcher
brew install the_silver_searcher

#Python
brew install python

# Powerline fonts
pip install --user powerline-status

# Node
brew install node

# Yarn
brew install yarn

# n (version management)
yarn global add n

# oh-my-zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# zsh-syntax-highlighting
brew install zsh-syntax-highlighting

# thefuck
brew install thefuck

# tmux
brew install tmux

# tmux plugin manager
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm

# fonts
brew tap homebrew/cask-fonts
brew cask install font-hack-nerd-font

# Link configs
echo Linking configs...
sh $PWD/link-configs.sh
echo Linking configs complete.

