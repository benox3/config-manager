local not_vscode = [[not vim.g.vscode]]

require('plugins')
vim.cmd('source ~/config-manager/nvim/settings.vim')
vim.cmd('source ~/config-manager/nvim/plugins_config.vim')

if not not_vscode then
  vim.cmd('source ~/config-manager/nvim/vscode-file-commands.vim')
  vim.cmd('source ~/config-manager/nvim/vscode-window-commands.vim')
end

