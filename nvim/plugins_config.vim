""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => LeaderF settings
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:Lf_ShortcutF = "<C-f>"
let g:Lf_CommandMap = {'<C-]>': ['<C-S>'], '<Tab>': ['<C-O>']}
let g:Lf_HideHelp = 1
let g:Lf_UseCache = 0
let g:Lf_UseVersionControlTool = 0
let g:Lf_IgnoreCurrentBufferName = 1
" popup mode
let g:Lf_WindowPosition = 'popup'
let g:Lf_PreviewInPopup = 1
let g:Lf_StlSeparator = { 'left': "\ue0b0", 'right': "\ue0b2", 'font': "DejaVu Sans Mono for Powerline" }
let g:Lf_PreviewResult = {'Function': 0, 'BufTag': 0 }
let g:Lf_NormalMap = { "File":   [["<ESC>", ':exec g:Lf_py "fileExplManager.quit()"<CR>'], ["<C-C>", ':exec g:Lf_py "fileExplManager.quit()"<CR>']] }

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Denite settings
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
	" Define mappings
  let g:python3_host_prog = expand('/usr/local/bin/python3')

	" autocmd FileType denite call s:denite_my_settings()
	" function! s:denite_my_settings() abort
  "   nnoremap <silent><buffer><expr> <CR>
  "         \ denite#do_map('do_action')
  "   nnoremap <silent><buffer><expr> d
  "         \ denite#do_map('do_action', 'delete')
  "   nnoremap <silent><buffer><expr> p
  "         \ denite#do_map('do_action', 'preview')
  "   nnoremap <silent><buffer><expr> <C-c>
  "         \ denite#do_map('quit')
  "   nnoremap <silent><buffer><expr> q
  "         \ denite#do_map('quit')
  "   nnoremap <silent><buffer><expr> i
  "         \ denite#do_map('open_filter_buffer')
  "   nnoremap <silent><buffer><expr> <Space>
  "         \ denite#do_map('toggle_select').'j'
  "   nnoremap <silent><buffer><expr> s
  "         \ denite#do_map('do_action', 'vsplit')
	" endfunction

		" autocmd FileType denite-filter
		" \ call s:denite_filter_my_settings()
		" function! s:denite_filter_my_settings() abort

  "     imap <silent><buffer> <C-o> <Plug>(denite_filter_quit)
		  " inoremap <silent><buffer><expr> <C-c>
		  " \ denite#do_map('quit')
		  " nnoremap <silent><buffer><expr> <C-c>
		  " \ denite#do_map('quit')
		" endfunction

" if executable('ag')
	" " The Silver Searcher
  " call denite#custom#option('_', 'max_dynamic_update_candidates', 100000)
	" call denite#custom#var('file/rec', 'command',
	" \ ['ag', '--follow', '--nocolor', '--nogroup', '-g', ''])

	" " Setup ignore patterns in your .agignore file!
	" " https://github.com/ggreer/the_silver_searcher/wiki/Advanced-Usage

	" call denite#custom#var('grep', 'command', ['ag'])
	" call denite#custom#var('grep', 'recursive_opts', [])
	" call denite#custom#var('grep', 'pattern_opt', [])
	" call denite#custom#var('grep', 'separator', ['--'])
	" call denite#custom#var('grep', 'final_opts', [])
	" call denite#custom#var('grep', 'default_opts',
  "       \ [ '--skip-vcs-ignores', '--vimgrep', '--smart-case', '--hidden',
  "       \ '--path-to-ignore', $AGIGNORE ])

" endif
  " nnoremap <C-f> :<C-u>Denite file/rec -start-filter<CR>

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Esearch
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
if exists('g:vscode')
  nnoremap <leader>g <Cmd>call VSCodeNotify('workbench.action.findInFiles', { 'query': expand('<cword>')})<CR>
else
  call esearch#map('<leader>g', 'esearch')
endif

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => NERDTree
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" let g:nerdtree_tabs_focus_on_files = 1
" let g:nerdtree_tabs_open_on_gui_startup = 0
" nnoremap <leader>nf :NERDTreeFind<cr>
" nnoremap <leader>nn :NERDTreeToggle<cr>

" let g:NERDTreeDirArrowExpandable = '⬏'
" let g:NERDTreeDirArrowCollapsible = '⬎'

" " Reload icons after init source
" if exists('g:loaded_webdevicons')
"   call webdevicons#refresh()
" endif
"
let g:loaded_netrw  = 1
let g:loaded_netrwPlugin = 1
let g:loaded_netrwSettings = 1
let g:loaded_netrwFileHandlers = 1
let g:cursorhold_updatetime = 100
let g:fern#renderer = "nerdfont"

augroup my-glyph-palette
  autocmd! *
  autocmd FileType fern call glyph_palette#apply()
  autocmd FileType nerdtree,startify call glyph_palette#apply()
augroup END

let g:fern#disable_default_mappings = 1

if exists('g:vscode')
  xmap gc  <Plug>VSCodeCommentary
  nmap gc  <Plug>VSCodeCommentary
  omap gc  <Plug>VSCodeCommentary
  nmap gcc <Plug>VSCodeCommentaryLine
    " VSCode extension
   noremap <silent> <Leader>nf <Cmd>call VSCodeNotify('workbench.view.explorer')<CR>
   noremap <silent> <Leader>nn <Cmd>call VSCodeNotify('workbench.action.toggleSidebarVisibility')<CR>
else
    " ordinary neovim
  noremap <silent> <Leader>nf :Fern %:h -drawer -reveal=% -width=35<CR><C-w>=
  noremap <silent> <Leader>nn :Fern . -drawer -toggle -reveal=% -width=35<CR><C-w>=
endif

function! FernInit() abort
  nmap <buffer><expr>
        \ <Plug>(fern-my-open-expand-collapse)
        \ fern#smart#leaf(
        \   "\<Plug>(fern-action-open:edit)",
        \   "\<Plug>(fern-action-expand)",
        \   "\<Plug>(fern-action-collapse)",
        \ )

 nmap <buffer><expr>
        \ <Plug>(fern-my-collapse-or-leave)
        \ fern#smart#drawer(
        \   "\<Plug>(fern-action-leave)",
        \ )
  nmap <buffer> <CR> <Plug>(fern-my-open-expand-collapse)
  nmap <buffer> o <Plug>(fern-my-open-expand-collapse)
  nmap <buffer> <2-LeftMouse> <Plug>(fern-my-open-expand-collapse)
  nmap <buffer> U <Plug>(fern-action-leave)
  nmap <buffer> C <Plug>(fern-action-enter)
  nmap <buffer> n <Plug>(fern-action-new-path)
  nmap <buffer> d <Plug>(fern-action-remove)
  nmap <buffer> m <Plug>(fern-action-move)
  nmap <buffer> e <Plug>(fern-action-mark:toggle)
  nmap <buffer> M <Plug>(fern-action-rename)
  nmap <buffer> I <Plug>(fern-action-hidden:toggle)
  nmap <buffer> R <Plug>(fern-action-reload)
  nmap <buffer> b <Plug>(fern-action-open:split)
  nmap <buffer> s <Plug>(fern-action-open:vsplit)
  nmap <buffer> c <Plug>(fern-action-copy)
  nmap <buffer><nowait> < <Plug>(fern-action-leave)
  nmap <buffer><nowait> > <Plug>(fern-action-enter)
endfunction

augroup FernGroup
  autocmd!
  autocmd FileType fern call FernInit()
augroup END

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Async Completion on startup
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:neosnippet#enable_completed_snippet = 1
inoremap <silent><expr><tab> pumvisible() ? "\<c-n>" : "\<tab>"
inoremap <silent><expr><s-tab> pumvisible() ? "\<c-p>" : "\<s-tab>"
inoremap <expr> <cr> pumvisible() ? "\<C-y>" : "\<C-g>u\<CR>"
inoremap <silent><expr> <c-space> coc#refresh()

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Airline *NOT BEING USED*
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:airline_powerline_fonts = 1

let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#show_buffers = 1
let g:airline#extensions#tabline#show_splits = 1
let g:airline#extensions#tabline#show_tabs = 0
let g:airline#extensions#tabline#fnamemod = ':t'
let g:airline_theme='dracula'

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
" let g:gruvbox_contrast_dark='hard'
set background=dark
" let g:vim_monokai_tasty_italic = 1
" colorscheme vim-monokai-tasty

colorscheme dracula

let g:dracula#palette.fg        = ['#F8F8F2', 253]
let g:dracula#palette.background        = ['#F8F8F2', 253]
let g:dracula#palette.color_5  = '#64bde3'
let g:dracula#palette.pink      = ['#FF79C6', 212]

"
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Goyo
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
nnoremap <leader>z :Goyo<cr> :Limelight!!<cr>
let g:limelight_conceal_guifg = '#958bb4'
let g:goyo_width = '50%'
let g:goyo_height = '100%'
set nowrap
set noshowmode
set nonumber
set nohlsearch
set mouse=a
set number
set numberwidth=3

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



if !exists('g:vscode')
" Set internal encoding of vim, not needed on neovim, since coc.nvim using some
" unicode characters in the file autoload/float.vim
set encoding=utf-8

" TextEdit might fail if hidden is not set.
set hidden

" Some servers have issues with backup files, see #649.
set nobackup
set nowritebackup

" Give more space for displaying messages.
set cmdheight=2

" Having longer updatetime (default is 4000 ms = 4 s) leads to noticeable
" delays and poor user experience.
set updatetime=300

" Don't pass messages to |ins-completion-menu|.
set shortmess+=c

" Always show the signcolumn, otherwise it would shift the text each time
" diagnostics appear/become resolved.
if has("patch-8.1.1564")
  " Recently vim can merge signcolumn and number column into one
  set signcolumn=number
else
  set signcolumn=yes
endif

" Use tab for trigger completion with characters ahead and navigate.
" NOTE: Use command ':verbose imap <tab>' to make sure tab is not mapped by
" other plugin before putting this into your config.
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

" Use <c-space> to trigger completion.
if has('nvim')
  inoremap <silent><expr> <c-space> coc#refresh()
else
  inoremap <silent><expr> <c-@> coc#refresh()
endif

" Make <CR> auto-select the first completion item and notify coc.nvim to
" format on enter, <cr> could be remapped by other vim plugin
inoremap <silent><expr> <cr> pumvisible() ? coc#_select_confirm()
                              \: "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"

" Use `[g` and `]g` to navigate diagnostics
" Use `:CocDiagnostics` to get all diagnostics of current buffer in location list.
nmap <silent> [g <Plug>(coc-diagnostic-prev)
nmap <silent> ]g <Plug>(coc-diagnostic-next)

" GoTo code navigation.
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)

" Use K to show documentation in preview window.
nnoremap <silent> K :call <SID>show_documentation()<CR>

function! s:show_documentation()
  if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
  elseif (coc#rpc#ready())
    call CocActionAsync('doHover')
  else
    execute '!' . &keywordprg . " " . expand('<cword>')
  endif
endfunction

" Highlight the symbol and its references when holding the cursor.
autocmd CursorHold * silent call CocActionAsync('highlight')

" Symbol renaming.
nmap <leader>rn <Plug>(coc-rename)

" Formatting selected code.
xmap <leader>f  <Plug>(coc-format-selected)
nmap <leader>f  <Plug>(coc-format-selected)

" Open actions
xmap <D-.>  <Plug>(coc-codeaction)
nmap <D-.>  <Plug>(coc-codeaction)

augroup mygroup
  autocmd!
  " Setup formatexpr specified filetype(s).
  autocmd FileType typescript,json setl formatexpr=CocAction('formatSelected')
  " Update signature help on jump placeholder.
  autocmd User CocJumpPlaceholder call CocActionAsync('showSignatureHelp')
augroup end

" Applying codeAction to the selected region.
" Example: `<leader>aap` for current paragraph
xmap <leader>a  <Plug>(coc-codeaction-selected)
nmap <leader>a  <Plug>(coc-codeaction-selected)

" Remap keys for applying codeAction to the current buffer.
nmap <leader>ac  <Plug>(coc-codeaction)
" Apply AutoFix to problem on the current line.
nmap <leader>f  <Plug>(coc-fix-current)

" Map function and class text objects
" NOTE: Requires 'textDocument.documentSymbol' support from the language server.
xmap if <Plug>(coc-funcobj-i)
omap if <Plug>(coc-funcobj-i)
xmap af <Plug>(coc-funcobj-a)
omap af <Plug>(coc-funcobj-a)
xmap ic <Plug>(coc-classobj-i)
omap ic <Plug>(coc-classobj-i)
xmap ac <Plug>(coc-classobj-a)
omap ac <Plug>(coc-classobj-a)

" Remap <C-f> and <C-b> for scroll float windows/popups.
if has('nvim-0.4.0') || has('patch-8.2.0750')
  " nnoremap <silent><nowait><expr> <Leader>z coc#float#has_scroll() ? coc#float#scroll(1) : "\<Leader>z"
  nnoremap <silent><nowait><expr> <C-b> coc#float#has_scroll() ? coc#float#scroll(0) : "\<C-b>"
  " inoremap <silent><nowait><expr> <Leader>z coc#float#has_scroll() ? "\<c-r>=coc#float#scroll(1)\<cr>" : "\<Right>"
  inoremap <silent><nowait><expr> <C-b> coc#float#has_scroll() ? "\<c-r>=coc#float#scroll(0)\<cr>" : "\<Left>"
  " vnoremap <silent><nowait><expr> <Leader>z coc#float#has_scroll() ? coc#float#scroll(1) : "\<Leader>z"
  vnoremap <silent><nowait><expr> <C-b> coc#float#has_scroll() ? coc#float#scroll(0) : "\<C-b>"
endif

" Use CTRL-S for selections ranges.
" Requires 'textDocument/selectionRange' support of language server.
nmap <silent> <C-s> <Plug>(coc-range-select)
xmap <silent> <C-s> <Plug>(coc-range-select)

" Add `:Format` command to format current buffer.
command! -nargs=0 Format :call CocAction('format')

" Add `:Fold` command to fold current buffer.
command! -nargs=? Fold :call     CocAction('fold', <f-args>)

" Add `:OR` command for organize imports of the current buffer.
command! -nargs=0 OR   :call     CocAction('runCommand', 'editor.action.organizeImport')

" Add (Neo)Vim's native statusline support.
" NOTE: Please see `:h coc-status` for integrations with external plugins that
" provide custom statusline: lightline.vim, vim-airline.
" set statusline^=%{coc#status()}%{get(b:,'coc_current_function','')}

" Mappings for CoCList
" Show all diagnostics.
nnoremap <silent><nowait> <space>a  :<C-u>CocList diagnostics<cr>
" Manage extensions.
nnoremap <silent><nowait> <space>e  :<C-u>CocList extensions<cr>
" Show commands.
nnoremap <silent><nowait> <space>c  :<C-u>CocList commands<cr>
" Find symbol of current document.
nnoremap <silent><nowait> <space>o  :<C-u>CocList outline<cr>
" Search workspace symbols.
nnoremap <silent><nowait> <space>s  :<C-u>CocList -I symbols<cr>
" Do default action for next item.
nnoremap <silent><nowait> <space>j  :<C-u>CocNext<CR>
" Do default action for previous item.
nnoremap <silent><nowait> <space>k  :<C-u>CocPrev<CR>
" Resume latest coc list.
nnoremap <silent><nowait> <space>p  :<C-u>CocListResume<CR>

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

nnoremap <leader>ne :call CocAction('diagnosticNext')<CR>
nnoremap <leader>pe :call CocAction('diagnosticPrev')<CR>
" hi! link CocErrorSign CocWarningSign
" hi! link CocWarningSign Number
" hi! link CocInfoSign Type

" === echodoc === "
" Don't show last command
set noshowcmd
" Enable echodoc on startup
set cmdheight=2
let g:echodoc#enable_at_startup = 1

autocmd User CocJumpPlaceholder call CocActionAsync('showSignatureHelp')

nnoremap <silent> K :call <SID>show_documentation()<CR>

function! s:show_documentation()
  if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
  else
    call CocAction('doHover')
  endif
endfunction

endif

" " sneak"
" let g:sneak#label = 1
" map f <Plug>Sneak_s
" map F <Plug>Sneak_S
"
"
" treesitter
if !exists('g:vscode')
lua <<EOF
require'nvim-treesitter.configs'.setup {
  ensure_installed = "maintained", -- one of "all", "maintained" (parsers with maintainers), or a list of languages
  highlight = {
    enable = true,              -- false will disable the whole extension
    disable = { "c", "rust" },  -- list of language that will be disabled
  },
}
EOF
end

set title
