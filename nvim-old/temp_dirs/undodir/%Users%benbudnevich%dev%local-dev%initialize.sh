Vim�UnDo� �Kl�#θ+�5Yr%Pp[���Mְ�٣��a      for repo in                               a���    _�                             ����                                                                                                                                                                                                                                                                                                                                                             a��H     �                   5��                        
                   
       5�_�                            ����                                                                                                                                                                                                                                                                                                                               	          	       V   /    a��j     �                  
git clone �               5��                                                  �                                           �       5�_�                       C    ����                                                                                                                                                                                                                                                                                                                               C          o       v   o    a��     �                  �for repo in $(curl -s --header "PRIVATE-TOKEN: your_private_token" https://<your-host>/api/v4/groups/<group_id> | jq ".projects[].ssh_url_to_repo" | tr -d '"'); do git clone $repo; done;�               5��        C       -       +   C       -       +       5�_�                       n    ����                                                                                                                                                                                                                                                                                                                               C          m       v   o    a��    �                  �for repo in $(curl -s --header "PRIVATE-TOKEN: your_private_token" https://gitlab.com/api/v4/groups/<group_id>| jq ".projects[].ssh_url_to_repo" | tr -d '"'); do git clone $repo; done;5��        n                  n                      5�_�                       d    ����                                                                                                                                                                                                                                                                                                                               C          m       v   o    a��     �                  �for repo in $(curl -s --header "PRIVATE-TOKEN: your_private_token" https://gitlab.com/api/v4/groups/<group_id>?include_subgroups=true| jq ".projects[].ssh_url_to_repo" | tr -d '"'); do git clone $repo; done;5��        d       
           d       
               5�_�                       /    ����                                                                                                                                                                                                                                                                                                                               /          @       v   @    a��    �                  �for repo in $(curl -s --header "PRIVATE-TOKEN: your_private_token" https://gitlab.com/api/v4/groups/?include_subgroups=true| jq ".projects[].ssh_url_to_repo" | tr -d '"'); do git clone $repo; done;�               5��        /                 /                     5�_�                       l    ����                                                                                                                                                                                                                                                                                                                               /          H       v   @    a��    �                  �for repo in $(curl -s --header "PRIVATE-TOKEN: glpat-7S5xuGck5ewUxExRfabu" https://gitlab.com/api/v4/groups/?include_subgroups=true| jq ".projects[].ssh_url_to_repo" | tr -d '"'); do git clone $repo; done;�               5��        l                  l                      5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             a��     �                  �for repo in $(curl -s --header "PRIVATE-TOKEN: glpat-7S5xuGck5ewUxExRfabu" https://gitlab.com/api/v4/groups/6302628?include_subgroups=true| jq ".projects[].ssh_url_to_repo" | tr -d '"'); do git clone $repo; done;5��                                                �                                                5�_�      
           	      �    ����                                                                                                                                                                                                                                                                                                                                                             a���     �                 �  $(curl -s --header "PRIVATE-TOKEN: glpat-7S5xuGck5ewUxExRfabu" https://gitlab.com/api/v4/groups/6302628?include_subgroups=true| jq ".projects[].ssh_url_to_repo" | tr -d '"'); do git clone $repo; done;5��       �                 �                      �                          �                      5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             a���     �                 �  $(curl -s --header "PRIVATE-TOKEN: glpat-7S5xuGck5ewUxExRfabu" https://gitlab.com/api/v4/groups/6302628?include_subgroups=true| jq ".projects[].ssh_url_to_repo" | tr -d '"')   ; do git clone $repo; done;5��       �                 �                     5�_�   
                    �    ����                                                                                                                                                                                                                                                                                                                                                             a���     �                 �  $(curl -s --header "PRIVATE-TOKEN: glpat-7S5xuGck5ewUxExRfabu" https://gitlab.com/api/v4/groups/6302628?include_subgroups=true| jq ".projects[].ssh_url_to_repo" | tr -d '"') ; do git clone $repo; done;5��       �                  �                      5�_�                       �    ����                                                                                                                                                                                                                                                                                                                                                             a���     �                 �  $(curl -s --header "PRIVATE-TOKEN: glpat-7S5xuGck5ewUxExRfabu" https://gitlab.com/api/v4/groups/6302628?include_subgroups=true| jq ".projects[].ssh_url_to_repo" | tr -d '"'); do git clone $repo; done;5��       �                �                     �                          �                      5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             a���    �                for repo in 5��                                                5��