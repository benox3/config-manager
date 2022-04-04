-- Automatically generated packer.nvim plugin loader code

if vim.api.nvim_call_function('has', {'nvim-0.5'}) ~= 1 then
  vim.api.nvim_command('echohl WarningMsg | echom "Invalid Neovim version for packer.nvim! | echohl None"')
  return
end

vim.api.nvim_command('packadd packer.nvim')

local no_errors, error_msg = pcall(function()

  local time
  local profile_info
  local should_profile = false
  if should_profile then
    local hrtime = vim.loop.hrtime
    profile_info = {}
    time = function(chunk, start)
      if start then
        profile_info[chunk] = hrtime()
      else
        profile_info[chunk] = (hrtime() - profile_info[chunk]) / 1e6
      end
    end
  else
    time = function(chunk, start) end
  end
  
local function save_profiles(threshold)
  local sorted_times = {}
  for chunk_name, time_taken in pairs(profile_info) do
    sorted_times[#sorted_times + 1] = {chunk_name, time_taken}
  end
  table.sort(sorted_times, function(a, b) return a[2] > b[2] end)
  local results = {}
  for i, elem in ipairs(sorted_times) do
    if not threshold or threshold and elem[2] > threshold then
      results[i] = elem[1] .. ' took ' .. elem[2] .. 'ms'
    end
  end

  _G._packer = _G._packer or {}
  _G._packer.profile_output = results
end

time([[Luarocks path setup]], true)
local package_path_str = "/Users/benbudnevich/.cache/nvim/packer_hererocks/2.1.0-beta3/share/lua/5.1/?.lua;/Users/benbudnevich/.cache/nvim/packer_hererocks/2.1.0-beta3/share/lua/5.1/?/init.lua;/Users/benbudnevich/.cache/nvim/packer_hererocks/2.1.0-beta3/lib/luarocks/rocks-5.1/?.lua;/Users/benbudnevich/.cache/nvim/packer_hererocks/2.1.0-beta3/lib/luarocks/rocks-5.1/?/init.lua"
local install_cpath_pattern = "/Users/benbudnevich/.cache/nvim/packer_hererocks/2.1.0-beta3/lib/lua/5.1/?.so"
if not string.find(package.path, package_path_str, 1, true) then
  package.path = package.path .. ';' .. package_path_str
end

if not string.find(package.cpath, install_cpath_pattern, 1, true) then
  package.cpath = package.cpath .. ';' .. install_cpath_pattern
end

time([[Luarocks path setup]], false)
time([[try_loadstring definition]], true)
local function try_loadstring(s, component, name)
  local success, result = pcall(loadstring(s), name, _G.packer_plugins[name])
  if not success then
    vim.schedule(function()
      vim.api.nvim_notify('packer.nvim: Error running ' .. component .. ' for ' .. name .. ': ' .. result, vim.log.levels.ERROR, {})
    end)
  end
  return result
end

time([[try_loadstring definition]], false)
time([[Defining packer_plugins]], true)
_G.packer_plugins = {
  Colorizer = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/Colorizer",
    url = "https://github.com/chrisbra/Colorizer"
  },
  ["FixCursorHold.nvim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/FixCursorHold.nvim",
    url = "https://github.com/antoinemadec/FixCursorHold.nvim"
  },
  LeaderF = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/LeaderF",
    url = "https://github.com/Yggdroot/LeaderF"
  },
  ["autocomplete-flow"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/autocomplete-flow",
    url = "https://github.com/wokalski/autocomplete-flow"
  },
  ["coc.nvim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/coc.nvim",
    url = "https://github.com/neoclide/coc.nvim"
  },
  dracula = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/dracula",
    url = "https://github.com/dracula/vim"
  },
  ["echodoc.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/echodoc.vim",
    url = "https://github.com/Shougo/echodoc.vim"
  },
  ["editorconfig-vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/editorconfig-vim",
    url = "https://github.com/editorconfig/editorconfig-vim"
  },
  ["fern-hijack.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/fern-hijack.vim",
    url = "https://github.com/lambdalisue/fern-hijack.vim"
  },
  ["fern-renderer-nerdfont.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/fern-renderer-nerdfont.vim",
    url = "https://github.com/lambdalisue/fern-renderer-nerdfont.vim"
  },
  ["fern.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/fern.vim",
    url = "https://github.com/lambdalisue/fern.vim"
  },
  ["glyph-palette.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/glyph-palette.vim",
    url = "https://github.com/lambdalisue/glyph-palette.vim"
  },
  ["goyo.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/goyo.vim",
    url = "https://github.com/junegunn/goyo.vim"
  },
  ["limelight.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/limelight.vim",
    url = "https://github.com/junegunn/limelight.vim"
  },
  ["neopairs.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/neopairs.vim",
    url = "https://github.com/Shougo/neopairs.vim"
  },
  ["neosnippet-snippets"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/neosnippet-snippets",
    url = "https://github.com/Shougo/neosnippet-snippets"
  },
  ["neosnippet.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/neosnippet.vim",
    url = "https://github.com/Shougo/neosnippet.vim"
  },
  ["nerdfont.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/nerdfont.vim",
    url = "https://github.com/lambdalisue/nerdfont.vim"
  },
  ["nvim-treesitter"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/nvim-treesitter",
    url = "https://github.com/nvim-treesitter/nvim-treesitter"
  },
  ["nvim-yarp"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/nvim-yarp",
    url = "https://github.com/roxma/nvim-yarp"
  },
  ["packer.nvim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/packer.nvim",
    url = "https://github.com/wbthomason/packer.nvim"
  },
  ["vim-airline"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-airline",
    url = "https://github.com/vim-airline/vim-airline"
  },
  ["vim-commentary"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-commentary",
    url = "https://github.com/tpope/vim-commentary"
  },
  ["vim-esearch"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-esearch",
    url = "https://github.com/eugen0329/vim-esearch"
  },
  ["vim-fugitive"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-fugitive",
    url = "https://github.com/tpope/vim-fugitive"
  },
  ["vim-hclfmt"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-hclfmt",
    url = "https://github.com/fatih/vim-hclfmt"
  },
  ["vim-hug-neovim-rpc"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-hug-neovim-rpc",
    url = "https://github.com/roxma/vim-hug-neovim-rpc"
  },
  ["vim-javascript"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-javascript",
    url = "https://github.com/pangloss/vim-javascript"
  },
  ["vim-jsx"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-jsx",
    url = "https://github.com/mxw/vim-jsx"
  },
  ["vim-jsx-typescript"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-jsx-typescript",
    url = "https://github.com/peitalin/vim-jsx-typescript"
  },
  ["vim-reason-plus"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-reason-plus",
    url = "https://github.com/reasonml-editor/vim-reason-plus"
  },
  ["vim-signify"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-signify",
    url = "https://github.com/mhinz/vim-signify"
  },
  ["vim-surround"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-surround",
    url = "https://github.com/tpope/vim-surround"
  },
  ["vim-test"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-test",
    url = "https://github.com/janko/vim-test"
  },
  ["vim-tmux-navigator"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vim-tmux-navigator",
    url = "https://github.com/christoomey/vim-tmux-navigator"
  },
  ["vimproc.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vimproc.vim",
    url = "https://github.com/Shougo/vimproc.vim"
  },
  vimwiki = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/vimwiki",
    url = "https://github.com/vimwiki/vimwiki"
  },
  ["yats.vim"] = {
    loaded = true,
    path = "/Users/benbudnevich/.local/share/nvim/site/pack/packer/start/yats.vim",
    url = "https://github.com/HerringtonDarkholme/yats.vim"
  }
}

time([[Defining packer_plugins]], false)
if should_profile then save_profiles() end

end)

if not no_errors then
  error_msg = error_msg:gsub('"', '\\"')
  vim.api.nvim_command('echohl ErrorMsg | echom "Error in packer_compiled: '..error_msg..'" | echom "Please check your config for correctness" | echohl None')
end
