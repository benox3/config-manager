Vim�UnDo� 5���L�)ݩȾ������\�<��&   P                 6       6   6   6    `�I�    _�                     6        ����                                                                                                                                                                                                                                                                                                                            6           :           V        `�Fr     �   5   ;   M    �   6   7   M    �   5   6          /func WithDatabase(db *sqlx.DB) ActivityOption {   	return func(a *Activities) {   		a.db = db   	}   }5��    5                      �      _               �    5                      �              f       5�_�                    6       ����                                                                                                                                                                                                                                                                                                                            6           :           V        `�Fu     �      
   R    5��                          �               H       5�_�                           ����                                                                                                                                                                                                                                                                                                                            7           ;           V        `�F�     �                Afunc DBNoop() (db *sqlx.DB)                 { return &sqlx.DB{} }5��                          x      B               5�_�                           ����                                                                                                                                                                                                                                                                                                                            6           :           V        `�F�     �         R      	db *sqlx.DB5��                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                            6           :           V        `�F�     �         R      	db 5��                         �                     �       	                 �                    �       	              
   �             
       5�_�                           ����                                                                                                                                                                                                                                                                                                                            6           :           V        `�F�     �                		db: DBNoop(),5��                         �                    5�_�                            ����                                                                                                                                                                                                                                                                                                                            6           :           V        `�F�    �         R      	db repo.Repository 5��                         �                     5�_�      	                     ����                                                                                                                                                                                                                                                                                                                            6           :           V        `�F�    �                	"github.com/jmoiron/sqlx"5��                          �       0               5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                            5           9           V        `�F�    �               Q   package activities       import (   '	"bitbucket.org/inturnco/go-sdk/logger"   (	"bitbucket.org/inturnco/go-sdk/tracing"   -	"bitbucket.org/inturnco/go-sdk/tracing/noop"   =	"gitlab.com/inturn/services/offerservice/auth/jwtvalidation"   G	"gitlab.com/inturn/services/offerservice/v2beta1/domain/listings/repo"   )       type Activities struct {   *	authenticator jwtvalidation.Authenticator   	// blobStore     blob.Store   	db repo.Repository   	// index         search.Index   	logger logger.Log   	tracer tracing.Tracer   }       'type ActivityOption func(a *Activities)       Tfunc AuthNoop() jwtvalidation.Authenticator { return jwtvalidation.Authenticator{} }       .func New(opts ...ActivityOption) *Activities {   	a := &Activities{   		authenticator: AuthNoop(),   		// blobStore:     blob.Noop,   		// db: DBNoop(),    		// index:         search.Noop,    		// mapper:        mapper.Noop,   		logger: logger.NewNoop(),   		tracer: noop.Tracer{},   	}   	for _, opt := range opts {   		opt(a)   	}       		return a   }       Rfunc WithAuthenticator(authenticator jwtvalidation.Authenticator) ActivityOption {   	return func(a *Activities) {   !		a.authenticator = authenticator   	}   }       8// func WithBlobStore(store blob.Store) ActivityOption {    // 	return func(a *Activities) {   // 		a.blobStore = store   // 	}   // }       6func WithDatabase(db repo.Repository) ActivityOption {   	return func(a *Activities) {   		a.db = db   	}   }       6// func WithIndex(index search.Index) ActivityOption {    // 	return func(a *Activities) {   // 		a.index = index   // 	}   // }       4// func WithMapper(m mapper.Mapper) ActivityOption {    // 	return func(a *Activities) {   // 		a.mapper = m   // 	}   // }       7func WithTracer(tracer tracing.Tracer) ActivityOption {   	return func(a *Activities) {   		a.tracer = tracer   	}   }       3func WithLogger(logger logger.Log) ActivityOption {   	return func(a *Activities) {   		a.logger = logger   	}   }5�5�_�   	              
   /        ����                                                                                                                                                                                                                                                                                                                            /          3          V       `�F�     �   .   /          8// func WithBlobStore(store blob.Store) ActivityOption {    // 	return func(a *Activities) {   // 		a.blobStore = store   // 	}   // }5��    .                      ?      ~               5�_�   
                 4        ����                                                                                                                                                                                                                                                                                                                            /          /          V       `�F�     �   4   :   L    �   4   5   L    5��    4                      �              ~       5�_�                    5        ����                                                                                                                                                                                                                                                                                                                            5           E           V        `�F�     �   4   5          8// func WithBlobStore(store blob.Store) ActivityOption {    // 	return func(a *Activities) {   // 		a.blobStore = store   // 	}   // }       6// func WithIndex(index search.Index) ActivityOption {    // 	return func(a *Activities) {   // 		a.index = index   // 	}   // }       4// func WithMapper(m mapper.Mapper) ActivityOption {    // 	return func(a *Activities) {   // 		a.mapper = m   // 	}   // }5��    4                      �      k              5�_�                    @        ����                                                                                                                                                                                                                                                                                                                            5           5           V        `�F�     �   @            5��    @                      �                     5�_�                    A        ����                                                                                                                                                                                                                                                                                                                            5           5           V        `�F�     �   A            �   A            5��    A                      �              k      5�_�                    B        ����                                                                                                                                                                                                                                                                                                                            5           5           V        `�F�    �   .   /   R       5��    .                      ?                     5�_�                    A        ����                                                                                                                                                                                                                                                                                                                            A           Q           V        `�F�     �   @   A          8// func WithBlobStore(store blob.Store) ActivityOption {    // 	return func(a *Activities) {   // 		a.blobStore = store   // 	}   // }       6// func WithIndex(index search.Index) ActivityOption {    // 	return func(a *Activities) {   // 		a.index = index   // 	}   // }       4// func WithMapper(m mapper.Mapper) ActivityOption {    // 	return func(a *Activities) {   // 		a.mapper = m   // 	}   // }5��    @                      �      k              5�_�                    >        ����                                                                                                                                                                                                                                                                                                                            A           A           V        `�F�     �   >   P   @    �   >   ?   @    5��    >                                    k      5�_�                    ?        ����                                                                                                                                                                                                                                                                                                                            R           R           V        `�F�     �   >              8// func WithBlobStore(store blob.Store) ActivityOption {    // 	return func(a *Activities) {   // 		a.blobStore = store   // 	}   // }       6// func WithIndex(index search.Index) ActivityOption {    // 	return func(a *Activities) {   // 		a.index = index   // 	}   // }       4// func WithMapper(m mapper.Mapper) ActivityOption {    // 	return func(a *Activities) {   // 		a.mapper = m   // 	}   // }   }    5��    >                           n      |      5�_�                    ?        ����                                                                                                                                                                                                                                                                                                                            Q           Q           V        `�F�    �   >   @   P    5��    >                                           �    >                                           5�_�                    ?        ����                                                                                                                                                                                                                                                                                                                            R           R           V        `�F�     �   >   @   Q       5��    >                                           �    >                    �                    �    >                    �                    �    >                    �                    �    >                    �                    �    >                    �                    �    >                    �                    �    >                    �                    �    >                    �                    �    >                    �                    �    >                                         �    >                  !                !       �    >                    �                    �    >                    �                    �    >                    �                    �    >                    �                    �    >                                         �    >                  "                "       �    >                    �                    �    >                    �                    �    >                    �                    �    >           $       $         $       $       �    >           $       &         $       &       �    >   %                  �                     5�_�                    ?   %    ����                                                                                                                                                                                                                                                                                                                            ?   $       P          V   $    `�F�     �   >   @   Q      %  // TODO: Add below hocs once needed5��    >   %                  �                     �    >   *                 �                    �    >   *                 �                    �    >   *                 �                    �    >   *                 �                    �    >   *                 �                    �    >   *              	   �             	       �    >   *       	       
   �      	       
       �    >   *       
       
   �      
       
       5�_�                   ?        ����                                                                                                                                                                                                                                                                                                                            ?           P          V   3    `�F�     �   >   ?          4  // TODO: Add below hocs once needed for activities   9	// func WithBlobStore(store blob.Store) ActivityOption {   !	// 	return func(a *Activities) {   	// 		a.blobStore = store   	// 	}   	// }       7	// func WithIndex(index search.Index) ActivityOption {   !	// 	return func(a *Activities) {   	// 		a.index = index   	// 	}   	// }       5	// func WithMapper(m mapper.Mapper) ActivityOption {   !	// 	return func(a *Activities) {   	// 		a.mapper = m   	// 	}   	// }5��    >                            �              5�_�                    ?        ����                                                                                                                                                                                                                                                                                                                            ?           ?          V   3    `�F�     �   ?            �   ?            5��    ?                      �              �      5�_�                    @       ����                                                                                                                                                                                                                                                                                                                            ?           ?          V   3    `�F�     �   ?              4  // TODO: Add below hocs once needed for activities   9	// func WithBlobStore(store blob.Store) ActivityOption {   !	// 	return func(a *Activities) {   	// 		a.blobStore = store   	// 	}   	// }       7	// func WithIndex(index search.Index) ActivityOption {   !	// 	return func(a *Activities) {   	// 		a.index = index   	// 	}   	// }       5	// func WithMapper(m mapper.Mapper) ActivityOption {   !	// 	return func(a *Activities) {   	// 		a.mapper = m   	// 	}   	// }5��    ?                     �      �      �      5�_�                    ?        ����                                                                                                                                                                                                                                                                                                                            ?           ?          V   3    `�F�     �   ?   A   R    5��    ?                      �                     5�_�                    @        ����                                                                                                                                                                                                                                                                                                                            ?           ?          V   3    `�F�   	 �   ?   @           5��    ?                      �                     5�_�                            ����                                                                                                                                                                                                                                                                                                                            ?           ?          V   3    `�G     �                Tfunc AuthNoop() jwtvalidation.Authenticator { return jwtvalidation.Authenticator{} }5��                                U               5�_�                            ����                                                                                                                                                                                                                                                                                                                            >           >          V   3    `�G   
 �                 5��                                               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `�G    �         O    �         O    �                		authenticator: AuthNoop(),5��                          Q                     �                          Q                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        `�G!    �         P    5��                          �               0       5�_�      !               (   %    ����                                                                                                                                                                                                                                                                                                                                                 V        `�G*     �   '   )   Q      Rfunc WithAuthenticator(authenticator jwtvalidation.Authenticator) ActivityOption {5��    '   %                  �                     5�_�       "           !   (   %    ����                                                                                                                                                                                                                                                                                                                                                 V        `�G*    �   '   )   Q      Efunc WithAuthenticator(authenticator .Authenticator) ActivityOption {5��    '   %                  �                     5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                                                 V        `�G3     �         Q      *	authenticator jwtvalidation.Authenticator5��                         }                     5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                 V        `�G3    �         Q      	authenticator .Authenticator5��                         }                     5�_�   #   &           $          ����                                                                                                                                                                                                                                                                                                                                                 V        `�G7    �                =	"gitlab.com/inturn/services/offerservice/auth/jwtvalidation"5��                          �       >               5�_�   $   '   %       &           ����                                                                                                                                                                                                                                                                                                                                                  V       `�I�     �                		// db: DBNoop(),5��                         u                    5�_�   &   (           '           ����                                                                                                                                                                                                                                                                                                                                                  V       `�I�     �                		db: DBNoop(),5��                          u                     5�_�   '   )           (           ����                                                                                                                                                                                                                                                                                                                                                  V       `�I�     �         O    �         O    5��                          V                     5�_�   (   *           )           ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �                		logger: logger.NewNoop(),   		tracer: noop.Tracer{},5��                          �      5               5�_�   )   +           *          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �         N    �         N    5��                          f              5       5�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �         P      		db: DBNoop(),5��                         \                     5�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �         P      			db: (),5��                      	   \              	       5�_�   ,   .           -          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �         P      		db: repo.Noop(),5��                         e                     5�_�   -   /           .          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �         P      		db: repo.Noop),5��                         e                     5�_�   .   0           /          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�    �         P      		db: repo.Noop,   		logger: logger.NewNoop(),   		tracer: noop.Tracer{},5��                         V      F       _       5�_�   /   1           0          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �                	// blobStore     blob.Store5��                          R                     5�_�   0   2           1          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �         O    �         O    5��                          �                     5�_�   1   3           2          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �                	// index         search.Index5��                          f                     5�_�   2   4           3          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �         O    �         O    5��                          �                     5�_�   3   5           4          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �                	// index         search.Index5��                          �                     5�_�   4   6           5          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�     �         O    �         O    5��                          �                     5�_�   5               6          ����                                                                                                                                                                                                                                                                                                                                                V       `�I�    �         P      	db repo.Repository   	logger logger.Log   	tracer tracing.Tracer5��                         R      >       W       5�_�   $           &   %           ����                                                                                                                                                                                                                                                                                                                                                 V        `�I�     �              5��                          u                     5�_�                    ?        ����                                                                                                                                                                                                                                                                                                                            ?           ?           V        `�F�     �   >   P        5��    >                            �              5��