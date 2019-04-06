"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Denite settings
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
if executable('ag')
	" The Silver Searcher

call denite#custom#var('file_rec', 'command',
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
nnoremap <C-f> :<C-u>Denite file_rec<CR>

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
let g:deoplete#enable_at_startup = 1
inoremap <silent><expr><tab> pumvisible() ? "\<c-n>" : "\<tab>"
inoremap <silent><expr><s-tab> pumvisible() ? "\<c-p>" : "\<s-tab>"

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Airline
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:airline_powerline_fonts = 1

let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#show_buffers = 1
let g:airline#extensions#tabline#show_splits = 1
let g:airline#extensions#tabline#show_tabs = 0
let g:airline#extensions#tabline#fnamemod = ':t'
let g:airline_theme='gruvbox'

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Gruvbox
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set termguicolors
let g:gruvbox_contrast_dark='hard'
set background=dark
colorscheme gruvbox

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

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => vim-jsx
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:jsx_ext_required = 0



""" vimwiki
set nocompatible
filetype plugin on
syntax on
