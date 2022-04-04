Vim�UnDo� ���1�3����%���:!���r�@��&|_	�   �                                   a�F     _�                              ����                                                                                                                                                                                                                                                                                                                                                             a�F     �               �   G# There can only be a single job definition per file. This job is named   C# "example" so it will create a job with the ID and Name "example".       B# The "job" stanza is the top-most configuration option in the job   I# specification. A job is a declarative specification of tasks that Nomad   N# should run. Jobs have a globally unique name, one or many task groups, which   2# are themselves collections of one or many tasks.   #   C# For more information and examples on the "job" stanza, please see   # the online documentation at:   #   A#     https://www.nomadproject.io/docs/job-specification/job.html   #   job "graphql-server" {     region   = "inturn"     priority = 99         datacenters = [       "inturn-dev",       "inturn-qa",       "inturn-staging",       "inturn-uat",       "inturn-demo",       "inturn-production",     ]         type = "service"         constraint {       attribute = "${node.class}"       value     = "worker"     }       
  update {       stagger           = "30s"       max_parallel      = 2       canary            = 1       min_healthy_time  = "10s"       healthy_deadline  = "3m"       progress_deadline = "10m"       auto_revert       = true       auto_promote      = true     }         group "graphql-server" {       count = 2           restart {         attempts = 4         interval = "30m"         delay    = "15s"         mode     = "fail"       }           network {         mode = "bridge"       }       -    [[- $env := env "CI_ENVIRONMENT_NAME" -]]   (    [[- $jobName := "graphql-server" -]]   4    [[- $serviceName := (print $jobName "-http") -]]   $    [[- $host := "api.inturn.io" -]]   #    [[- if ne $env "production" -]]   ,      [[- $host = (print $env "-" $host) -]]       [[- end ]]       service {   )      name        = "graphql-server-http"         tags        = [           "http",           "traefik.enable=true",   I        "traefik.http.routers.[[- $serviceName -]].entrypoints=external",   r        "traefik.http.routers.[[- $serviceName -]].rule=(Host(`[[ $host ]]`) && PathPrefix(`/[[- $jobName -]]`))",   a        "traefik.http.middlewares.strip-[[- $jobName -]].stripprefix.prefixes=/[[- $jobName -]]",   u        "traefik.http.routers.[[- $serviceName -]].middlewares=strip-[[- $jobName -]]@consulcatalog, cors-allow@file"   	        ]         port        = "9001"         canary_tags = [   )        "[[ env "CI_COMMIT_SHA" ]]-http",   -        "[[ env "CI_COMMIT_REF_NAME" ]]-http"         ]             meta {   5        service_project         = "${NOMAD_JOB_NAME}"   (        service_protocol        = "http"   3        service_customer_prefix = "${NOMAD_REGION}"   C        service_environment     = "[[ env "CI_ENVIRONMENT_NAME" ]]"   6        service_version         = "${RELEASE_VERSION}"   =        service_hash            = "[[ env "CI_COMMIT_SHA" ]]"   B        service_branch          = "[[ env "CI_COMMIT_REF_NAME" ]]"         }             check {           expose   = true   &        name     = "HTTP health check"           type     = "http"   6        path     = "/.well-known/apollo/server-health"           interval = "10s"           timeout  = "30s"         }             connect {           sidecar_service {             proxy {               upstreams {   -              destination_name = "offer-grpc"   $              local_bind_port = 8001               }               upstreams {   /              destination_name = "company-grpc"   $              local_bind_port = 8002               }               upstreams {   0              destination_name = "currency-grpc"   $              local_bind_port = 8003               }               upstreams {   /              destination_name = "product-grpc"   $              local_bind_port = 8004               }               upstreams {   2              destination_name = "activities-http"   $              local_bind_port = 8005               }               upstreams {   /              destination_name = "profile-http"   $              local_bind_port = 8006               }               upstreams {   0              destination_name = "document-http"   $              local_bind_port = 8007               }               upstreams {   .              destination_name = "search-http"   $              local_bind_port = 8008               }               upstreams {   ,              destination_name = "auth-http"   $              local_bind_port = 8009               }               upstreams {   0              destination_name = "core-api-http"   $              local_bind_port = 8010               }               upstreams {   =              destination_name = "workflow-update-offer-grpc"   $              local_bind_port = 8011               }               upstreams {   D              destination_name = "workflow-submit-offer-server-grpc"   $              local_bind_port = 8012               }               upstreams {   D              destination_name = "workflow-submit-offer-server-http"   $              local_bind_port = 8013               }             }   	        }         }       }       /    [[fileContents "inject/log-forwarder.hcl"]]           task "graphql-server" {         driver = "docker"             config {   t        image = "609637381482.dkr.ecr.us-east-1.amazonaws.com/[[ env "CI_PROJECT_PATH" ]]:[[ env "CI_COMMIT_SHA" ]]"         }       4      # set environment variables for graphql-server         env {   K        CI_COMMIT_SHA                         = "[[ env "CI_COMMIT_SHA" ]]"   P        CI_COMMIT_REF_NAME                    = "[[ env "CI_COMMIT_REF_NAME" ]]"   M        ARTIFACT_BUCKET                       = "[[ env "ARTIFACT_BUCKET" ]]"   M        CI_PROJECT_PATH                       = "[[ env "CI_PROJECT_PATH" ]]"   6        LOG_LEVEL                             = "info"   6        TRACING_ENABLED                       = "true"   6        LOG_CONFIG                            = "true"   Q        ENVIRONMENT                           = "[[ env "CI_ENVIRONMENT_NAME" ]]"   S        DD_TRACE_AGENT_HOSTNAME               = "${attr.unique.network.ip-address}"   6        HTTP_PORT                             = "9001"   S        OFFERS_SERVICE_ADDRESS                = "${NOMAD_UPSTREAM_ADDR_offer_grpc}"   U        COMPANY_SERVICE_ADDRESS               = "${NOMAD_UPSTREAM_ADDR_company_grpc}"   V        CURRENCY_SERVICE_ADDRESS              = "${NOMAD_UPSTREAM_ADDR_currency_grpc}"   U        PRODUCT_SERVICE_ADDRESS               = "${NOMAD_UPSTREAM_ADDR_product_grpc}"   q        WORKFLOW_SUBMIT_OFFER_SERVICE_ADDRESS = "http://${NOMAD_UPSTREAM_ADDR_workflow_submit_offer_server_http}"   c        WORKFLOW_UPDATE_OFFER_SERVICE_ADDRESS = "${NOMAD_UPSTREAM_ADDR_workflow_update_offer_grpc}"           ### from attributes   _        ACTIVITY_SERVICE_DOMAIN               = "http://${NOMAD_UPSTREAM_ADDR_activities_http}"   Y        AUTH_SERVICE_DOMAIN                   = "http://${NOMAD_UPSTREAM_ADDR_auth_http}"   \        PROFILE_SERVICE_DOMAIN                = "http://${NOMAD_UPSTREAM_ADDR_profile_http}"   ]        DOCUMENT_SERVICE_DOMAIN               = "http://${NOMAD_UPSTREAM_ADDR_document_http}"   ]        CORE_API_DOMAIN                       = "http://${NOMAD_UPSTREAM_ADDR_core_api_http}"   [        SEARCH_SERVICE_DOMAIN                 = "http://${NOMAD_UPSTREAM_ADDR_search_http}"         }             logs {           max_files     = 10           max_file_size = 15         }             resources {           cpu    = 500           memory = 1000         }             template {           data = <<EOT   V          NODE_CONFIG='{{ tree "services/graphql-server/server" | explode | toJSON }}'   A          LOG_LEVEL={{ key "services/graphql-server/LOG_LEVEL" }}           EOT       5        destination = "${NOMAD_SECRETS_DIR}/file.env"           env         = true         }       }     }   }5�5��