Vim�UnDo� �{��.���S�0���ݩ�dd�
�7*�k�        �                           b �    _�                    �       ����                                                                                                                                                                                                                                                                                                                            N          N          V       bS     �  �  �      �  �  �      5��    �                     ?B                     5�_�                   �       ����                                                                                                                                                                                                                                                                                                                            N          N          V       bS     �  �  �        if exists('g:vscode')5��    �                    BB                     5�_�                          ����                                                                                                                                                                                                                                                                                                                            N          N          V       bS     �             �          5��                         �C                     �                         �C                     �                        �C                    �                        �C                    �                        �C                    �                        �C                    5�_�                    y        ����                                                                                                                                                                                                                                                                                                                            N          N          V       bS    �   y   {          f   noremap <silent> <Leader>nn <Cmd>call VSCodeNotify('workbench.action.toggleSidebarVisibility')<CR> �   x   z        U   noremap <silent> <Leader>nf <Cmd>call VSCodeNotify('workbench.view.explorer')<CR> 5��    x   T                  �                     �    y   e                  	                     5�_�                   �       ����                                                                                                                                                                                                                                                                                                                                    �          V       bS    �  �       	   	lua <<EOF   (require'nvim-treesitter.configs'.setup {   s  ensure_installed = "maintained", -- one of "all", "maintained" (parsers with maintainers), or a list of languages     highlight = {   I    enable = true,              -- false will disable the whole extension   I    disable = { "c", "rust" },  -- list of language that will be disabled     },   }   EOF5��    �                     TB                     �    �                     `B                     �    �                    �B                    �    �                    C                    �    �                    C                    �    �                    _C                    �    �                    �C                    �    �                     �C                     �                          �C                     5�_�                   �       ����                                                                                                                                                                                                                                                                                                                                    �          V       bSE    �  �  �        if !exists('g:vscode')5��    �                   @B                    5�_�                   �       ����                                                                                                                                                                                                                                                                                                                                    �          V       bSf     �  �  �        if ~exists('g:vscode')5��    �                    @B                     5�_�      	             �       ����                                                                                                                                                                                                                                                                                                                                    �          V       bSi    �  �  �        if exists('g:vscode')5��    �                    RB                     �    �                   UB                    5�_�                 	  �       ����                                                                                                                                                                                                                                                                                                                                    �          V       bSn     �  �  �        if exists('g:vscode') = nil5��    �                    SB                     5�_�   	      
         �       ����                                                                                                                                                                                                                                                                                                                                    �          V       bSr     �  �  �        if exists('g:vscode') ~:w= nil5��    �                    UB                     5�_�                   �       ����                                                                                                                                                                                                                                                                                                                                    �          V       bSr    �  �  �        if exists('g:vscode') ~:= nil5��    �                    TB                     5�_�                   �       ����                                                                                                                                                                                                                                                                                                                                    �          V       bS�     �  �  �        if exists('g:vscode') ~= nil5��    �                    @B                     5�_�                   �       ����                                                                                                                                                                                                                                                                                                                                    �          V       bS�    �  �  �        if !exists('g:vscode') ~= nil5��    �                    SB                     5�_�                   �        ����                                                                                                                                                                                                                                                                                                                           �   
                V       bS�   	 �  �       	     lua <<EOF   *  require'nvim-treesitter.configs'.setup {   u    ensure_installed = "maintained", -- one of "all", "maintained" (parsers with maintainers), or a list of languages       highlight = {   K      enable = true,              -- false will disable the whole extension   K      disable = { "c", "rust" },  -- list of language that will be disabled       },     }     EOF5��    �                     TB                     �    �                     ^B                     �    �                    �B                    �    �                    �B                    �    �                    C                    �    �                    UC                    �    �                    �C                    �    �                     �C                     �                          �C                     5�_�                          ����                                                                                                                                                                                                                                                                                                                           �         �          V       bTZ   
 �            endif5��                        �C                     5�_�                           ����                                                                                                                                                                                                                                                                                                                            N           P           V        b �     �           5��                         1%                     5�_�                           ����                                                                                                                                                                                                                                                                                                                            N           P           V        b �     �    !      �           5��                         2%                     5�_�                           ����                                                                                                                                                                                                                                                                                                                            N           P           V        b �     �    !        if exists('g:vscode')5��                        5%                     5�_�                    �        ����                                                                                                                                                                                                                                                                                                                            N           P           V        b �    �  �  �         �  �  �      5��    �                     �A                     �    �                     �A                     �    �                    �A                    �    �                    �A                    5�_�   	              
  �       ����                                                                                                                                                                                                                                                                                                                                    �          V       bSn     �  �  �        if exists('g:vscode') ~:w     = nil5��    �                    VB                     �    �                     WB                     5��