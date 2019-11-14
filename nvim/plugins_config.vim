"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Denite settings
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
	" Define mappings
	autocmd FileType denite call s:denite_my_settings()
	function! s:denite_my_settings() abort
    nnoremap <silent><buffer><expr> <CR>
          \ denite#do_map('do_action')
    nnoremap <silent><buffer><expr> d
          \ denite#do_map('do_action', 'delete')
    nnoremap <silent><buffer><expr> p
          \ denite#do_map('do_action', 'preview')
    nnoremap <silent><buffer><expr> <C-c>
          \ denite#do_map('quit')
    nnoremap <silent><buffer><expr> q
          \ denite#do_map('quit')
    nnoremap <silent><buffer><expr> i
          \ denite#do_map('open_filter_buffer')
    nnoremap <silent><buffer><expr> <Space>
          \ denite#do_map('toggle_select').'j'
    nnoremap <silent><buffer><expr> s
          \ denite#do_map('do_action', 'vsplit')
	endfunction

		autocmd FileType denite-filter
		\ call s:denite_filter_my_settings()
		function! s:denite_filter_my_settings() abort

      imap <silent><buffer> <C-o> <Plug>(denite_filter_quit)
		  inoremap <silent><buffer><expr> <C-c>
		  \ denite#do_map('quit')
		  nnoremap <silent><buffer><expr> <C-c>
		  \ denite#do_map('quit')
		endfunction

if executable('ag')
	" The Silver Searcher

call denite#custom#var('file/rec', 'command',
		\ ['ag', '--follow', '--nocolor', '--nogroup', '-g', ''])

	" Setup ignore patterns in your .agignore file!
	" https://github.com/ggreer/the_silver_searcher/wiki/Advanced-Usage

	call denite#custom#var('grep', 'command', ['ag'])
	call denite#custom#var('grep', 'recursive_opts', [])
	call denite#custom#var('grep', 'pattern_opt', [])
	call denite#custom#var('grep', 'separator', ['--'])
	call denite#custom#var('grep', 'final_opts', [])
	call denite#custom#var('grep', 'default_opts',
        \ [ '--skip-vcs-ignores', '--vimgrep', '--smart-case', '--hidden',
        \ '--path-to-ignore', $AGIGNORE ])

endif
  nnoremap <C-f> :<C-u>Denite file/rec -start-filter<CR>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Esearch
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
call esearch#map('<leader>g', 'esearch')

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => NERDTree
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:nerdtree_tabs_focus_on_files = 1
let g:nerdtree_tabs_open_on_gui_startup = 0
nnoremap <leader>nf :NERDTreeFind<cr>
nnoremap <leader>nn :NERDTreeToggle<cr>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Async Completion on startup
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:neosnippet#enable_completed_snippet = 1
inoremap <silent><expr><tab> pumvisible() ? "\<c-n>" : "\<tab>"
inoremap <silent><expr><s-tab> pumvisible() ? "\<c-p>" : "\<s-tab>"

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Airline *NOT BEING USED*
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:airline_powerline_fonts = 1

let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#show_buffers = 1
let g:airline#extensions#tabline#show_splits = 1
let g:airline#extensions#tabline#show_tabs = 0
let g:airline#extensions#tabline#fnamemod = ':t'
let g:airline_theme='gruvbox'

"
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Crystalline
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
function! StatusLine(current, width)
  let l:s = ''

  if a:current
    let l:s .= crystalline#mode() . crystalline#right_mode_sep('')
  else
    let l:s .= '%#CrystallineInactive#'
    '
  endif
  let l:s .= ' %t%h%w%m%r '
  if a:current
    let l:s .= crystalline#right_sep('', 'Fill')
  endif

  let l:s .= '%='
  if a:current
    let l:s .= crystalline#left_sep('', 'Fill') . ' %{&paste ?"PASTE ":""}%{&spell?"SPELL ":""}'
    let l:s .= crystalline#left_mode_sep('')
  endif
  if a:width > 80
    let l:s .= ' %{&ft}[%{&enc}][%{&ffs}] %l/%L %c%V %P '
  else
    let l:s .= ' '
  endif

  return l:s
endfunction

function! TabLine()
  let l:vimlabel = has('nvim') ?  ' NVIM ' : ' VIM '
  let l:s = ' %t%h%w%m%r '
  let l:s .= crystalline#bufferline(2, len(l:vimlabel), 1) . '%=%#CrystallineTab# ' . l:vimlabel
  return l:s
endfunction

let g:crystalline_enable_sep = 1
let g:crystalline_statusline_fn = 'StatusLine'
let g:crystalline_tabline_fn = 'TabLine'
let g:crystalline_theme = 'molokai'

set showtabline=2
set guioptions-=e
set laststatus=2


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Gruvbox
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set termguicolors
" let g:gruvbox_contrast_dark='hard'
" set background=dark
let g:vim_monokai_tasty_italic = 1
colorscheme vim-monokai-tasty

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => ALE
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:ale_linters = {
\   'javascript': ['eslint', 'flow'],
\   'typescript': ['tslint'],
\}

let g:ale_fixers = { 'typescript': ['tslint']}
let g:ale_completion_enabled = 0
let g:ale_fix_on_save = 1
"
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Goyo
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
nnoremap <leader>z :Goyo<cr>
let g:goyo_linenr = 1

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => vim-jsx
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:jsx_ext_required = 0



""" vimwiki
set nocompatible
filetype plugin on
syntax on


"" vim language server settings
let g:LanguageClient_serverCommands = {
    \ 'reason': ['~/rls-macos/reason-language-server'],
    \ }


" COC
" Remap keys for gotos
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)
nmap <silent> ge <Plug>(coc-diagnostic-info)

" use <tab> for trigger completion and navigate to next complete item
function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~ '\s'
endfunction

inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()

"Close preview window when completion is done.
autocmd! CompleteDone * if pumvisible() == 0 | pclose | endif

hi! link CocErrorSign WarningMsg
hi! link CocWarningSign Number
hi! link CocInfoSign Type

" === echodoc === "
" Don't show last command
set noshowcmd
" Enable echodoc on startup
set cmdheight=2
let g:echodoc#enable_at_startup = 1

autocmd User CocJumpPlaceholder call CocActionAsync('showSignatureHelp')
