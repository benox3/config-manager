Vim�UnDo� E�8 �Px�w��B��jP�ű��F"��y�L              	                       `���    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `���     �                   5��                                                  �                                                �                                                �                                                �                                                �                                                �                                              �                                              �                                              �                                              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �                  package postgres5��                                                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `���     �                  5��                                                �                                                �                                              �                                              �                                              �                                             �                                             �                                             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �                 func main() {5��                                               �                                                 �                                                 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `���     �             5��                                                 �                                                 �                                                 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `���     �      &       �             5��                   !       !               �      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `���     �                 5��                                                 5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             `���     �         %      "-- DDL generated by Postico 1.5.165��                                                 �                         "                      �                         !                      �                                               �                         #                      �                         "                      �                         !                      �                                               5�_�      
           	   %       ����                                                                                                                                                                                                                                                                                                                                                             `���     �   $              }5��    $                                          5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             `���     �         %      func main() {5��                                               5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             `���    �         %      	func () {5��                                               �                                             �                                             �                                             �                                             �                                             �                                             �                                             �                                              �                                              5�_�                            ����                                                                                                                                                                                                                                                                                                                                      %           v���    `���    �   #   %          ?CREATE UNIQUE INDEX v2_listing_pkey ON v2_listing(id uuid_ops);�   !   #          B-- Indices -------------------------------------------------------�      !          );�      
          CREATE TABLE v2_listing (�                B-- Table Definition ----------------------------------------------�                B-- Not all database features are supported. Do not use for backup.�                *return `-- DDL generated by Postico 1.5.165��                          )                      �                          V                      �                          �                      �                          �                      �                          �                     �    !                      �                     �    #                      �                     5�_�                    %       ����                                                                                                                                                                                                                                                                                                                                      %           v���    `���     �   $              }`5��    $                     1                     5�_�                    %        ����                                                                                                                                                                                                                                                                                                                                      %           v���    `���     �   $              }5��    $                      0                     5�_�                    %        ����                                                                                                                                                                                                                                                                                                                                      %           v���    `���    �              "   ,  return `-- DDL generated by Postico 1.5.16   D  -- Not all database features are supported. Do not use for backup.       D  -- Table Definition ----------------------------------------------         CREATE TABLE v2_listing (       id uuid PRIMARY KEY,       group_id uuid NOT NULL,   *    title character varying(255) NOT NULL,   0    description character varying(500) NOT NULL,      status character varying(255) NOT NULL DEFAULT 'NAMED'::character varying CHECK (status::text = ANY (ARRAY['NAMED'::character varying::text, 'INVENTORY'::character varying::text, 'BUYERS'::character varying::text, 'PRICE'::character varying::text, 'RESTRICTIONS'::character varying::text, 'DATES'::character varying::text, 'PUBLISHED'::character varying::text, 'CLOSED'::character varying::text, 'SETTINGS'::character varying::text, 'CASEPACK'::character varying::text, 'PROCESSING'::character varying::text])),   E    created_at timestamp(0) without time zone NOT NULL DEFAULT now(),   H    last_modified timestamp(0) without time zone NOT NULL DEFAULT now(),   -    published timestamp(0) without time zone,   ,    end_date timestamp(0) without time zone,   .    deleted_at timestamp(0) without time zone,       cloned_from_listing uuid,   6    allow_pickingitems boolean NOT NULL DEFAULT false,   6    allow_pickingsizes boolean NOT NULL DEFAULT false,   ;    allow_pickingquantities boolean NOT NULL DEFAULT false,   7    allow_counteroffers boolean NOT NULL DEFAULT false,       metadata jsonb,       market_id uuid,       company_id uuid NOT NULL,       created_by uuid NOT NULL,   0    other_restrictions character varying(10000),   "    parent_group_id uuid NOT NULL,   =    currency_code character(3) NOT NULL DEFAULT 'USD'::bpchar     );       D  -- Indices -------------------------------------------------------       A  CREATE UNIQUE INDEX v2_listing_pkey ON v2_listing(id uuid_ops);   `}5��           "       #       )       
      
      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v���    `���    �         &      func CreateListing() {5��                         &                      �                        '                     �                        '                     �                        '                     �                        '                     �                        '                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v���    `��9     �               &   package postgres       func CreateListing() string {   +	return `-- DDL generated by Postico 1.5.16   D  -- Not all database features are supported. Do not use for backup.       D  -- Table Definition ----------------------------------------------         CREATE TABLE v2_listing (       id uuid PRIMARY KEY,       group_id uuid NOT NULL,   *    title character varying(255) NOT NULL,   0    description character varying(500) NOT NULL,      status character varying(255) NOT NULL DEFAULT 'NAMED'::character varying CHECK (status::text = ANY (ARRAY['NAMED'::character varying::text, 'INVENTORY'::character varying::text, 'BUYERS'::character varying::text, 'PRICE'::character varying::text, 'RESTRICTIONS'::character varying::text, 'DATES'::character varying::text, 'PUBLISHED'::character varying::text, 'CLOSED'::character varying::text, 'SETTINGS'::character varying::text, 'CASEPACK'::character varying::text, 'PROCESSING'::character varying::text])),   E    created_at timestamp(0) without time zone NOT NULL DEFAULT now(),   H    last_modified timestamp(0) without time zone NOT NULL DEFAULT now(),   -    published timestamp(0) without time zone,   ,    end_date timestamp(0) without time zone,   .    deleted_at timestamp(0) without time zone,       cloned_from_listing uuid,   6    allow_pickingitems boolean NOT NULL DEFAULT false,   6    allow_pickingsizes boolean NOT NULL DEFAULT false,   ;    allow_pickingquantities boolean NOT NULL DEFAULT false,   7    allow_counteroffers boolean NOT NULL DEFAULT false,       metadata jsonb,       market_id uuid,       company_id uuid NOT NULL,       created_by uuid NOT NULL,   0    other_restrictions character varying(10000),   "    parent_group_id uuid NOT NULL,   =    currency_code character(3) NOT NULL DEFAULT 'USD'::bpchar     );       D  -- Indices -------------------------------------------------------       A  CREATE UNIQUE INDEX v2_listing_pkey ON v2_listing(id uuid_ops);   `   }5�5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v���    `��:     �          &      package postgres5��                                                5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v���    `��;     �          &      package 5��                                                �                                              5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 v���    `��<    �          &      package seed 5��                                                5�_�                       	    ����                                                                                                                                                                                                                                                                                                                               	                  v   
    `���     �         &      +	return `-- DDL generated by Postico 1.5.16   D  -- Not all database features are supported. Do not use for backup.       D  -- Table Definition ----------------------------------------------         CREATE TABLE v2_listing (5��       	                  5       �               5�_�                       	    ����                                                                                                                                                                                                                                                                                                                               	          	       v   
    `���     �         !      $	return `  CREATE TABLE v2_listing (5��       	                  5                      5�_�                       	    ����                                                                                                                                                                                                                                                                                                                               	          	       v   
    `���     �         !      #	return ` CREATE TABLE v2_listing (5��       	                  5                      5�_�                            ����                                                                                                                                                                                                                                                                                                                               
                  V   
    `���   	 �                D  -- Indices -------------------------------------------------------    5��                          �      F               5�_�                       
    ����                                                                                                                                                                                                                                                                                                                               
                  V   
    `���     �                A  CREATE UNIQUE INDEX v2_listing_pkey ON v2_listing(id uuid_ops);5��                          �      B               5�_�                             ����                                                                                                                                                                                                                                                                                                                               
                  V   
    `���    �                 5��                          �                     5��