#!/bin/sh
sudo apt-get update

# Temp Dir
INSTALL_DIR=./installs

# Alacritty
ALACRITTY_DIR=$INSTALL_DIR/alacritty;
if [ ! -d "$ALACRITTY_DIR" ]; then
  git clone https://github.com/jwilm/alacritty.git $ALACRITTY_DIR
  cd $ALACRITTY_DIR
  cargo install cargo-deb --force
  cargo deb --install
fi

# Dein
DEIN_INSTALL_DIR=$INSTALL_DIR/dein
curl https://raw.githubusercontent.com/Shougo/dein.vim/master/bin/installer.sh > $DEIN_INSTALL_DIR/installer.sh
# For example, we just use `~/.cache/dein` as installation directory
sh $DEIN_INSTALL_DIR/installer.sh ~/.cache/dein

# Neovim
sudo apt-add-repository ppa:neovim-ppa/stable
sudo apt-get install neovim

# Xsel
sudo apt-get install xsel

# Silver-searcher
sudo apt-get install silversearcher-ag

# Powerline fonts
sudo apt-get install fonts-powerline

# Node
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs

# Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get install yarn

sh $PWD/link-configs.sh
