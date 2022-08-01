local list = {{
    key = "s",
    action = "vsplit"
}}

local nvimtree = {
    git = {
        enable = true
    },
    view = {
        mappings = {
            list = list
        }
    }
}
return nvimtree
