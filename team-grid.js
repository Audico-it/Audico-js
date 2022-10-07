<script>
var Webflow = Webflow || []
Webflow.push(function () { // Run all the code after the site is fully loaded.  

// *** BMG Super filter code ***

// Global strings
const S_WRAPPERS = '[bmg_super-filter = "wrapper"]'
const S_FILTERS = '[bmg_super-filter = "filters"]'
const S_IDENT_NAME = '[bmg_super-filter_identification = "name"]'
const S_IDENT_DEPARTMENT = '[bmg_super-filter_identification = "department"]'
const S_RESET = '[bmg_super-filter = "reset"]'
const S_LIST = '[bmg_super-filter = "list"]'
const S_DYN_ITEM = '.w-dyn-item'
const S_BUTTON = '[bmg_super-filter = "button"]'

// Global CSS
const CSS_SHOW = {
    'top': '0px',
    'opacity': '100%',
    'transition-property': 'top, opacity',
    'transition-duration': '350ms',
    'transition-timing-function': 'ease'
}
const CSS_HIDE = {
    'position': 'relative',
    'top': '100px',
    'opacity': '0%',
    'display': 'none'
}


// Main function
$( S_WRAPPERS ).each(function()
{

    // * Search function *
    let $_this_list = $(this).find( S_LIST )
    let $_search = $(this).find( S_FILTERS ).find( S_IDENT_NAME )
    let $_names = $_this_list.find( S_IDENT_NAME )

    $_search.on('input', function ()
    {
        clear_filters(1)
        let val = $_search.val().toLowerCase()
        let items_shown_max = max_n_of_items_to_be_shown()
        items_shown = 0
        max_items_available = 0

        $_names.each(function ()
        {
            let $_dyn_item = $(this).closest( S_DYN_ITEM )
            let text = $(this).text().toLowerCase()

            if ( text.indexOf( val ) >= 0 )
            {
                max_items_available++
            }

            if ( text.indexOf( val ) >= 0 && items_shown < items_shown_max )
            {
                items_shown++
                $_dyn_item.show().css( CSS_SHOW )
            }
            else
            {
                $_dyn_item.css( CSS_HIDE )
            } 
        })

        if ( val == '' )
        {
            hide_dyn_items()
            show_max_dyn_items()
            should_load_more_be_shown( items_shown, max_items_available )
        }
    })

    // * Button filtering *
    let $_filter_buttons = $(this).find( S_FILTERS ).find( S_IDENT_DEPARTMENT ).parent()
    let $_filter_texts = $_this_list.find( S_IDENT_DEPARTMENT )

    $_filter_buttons.each(function() 
    {
        $(this).click(function() 
        {
            clear_filters(0)
            $(this).addClass( 'is-active' )
            let fb_text = $(this).find( S_IDENT_DEPARTMENT ).text()

            $_this_list.find( S_DYN_ITEM ).css( CSS_HIDE )
            let items_shown_max = max_n_of_items_to_be_shown()
            items_shown = 0
            max_items_available = 0

            $_filter_texts.each(function ()
            {
                let $_dyn_item = $(this).closest( S_DYN_ITEM )
                let ft_text = $(this).text()

                if ( fb_text == ft_text )
                {
                    max_items_available++
                }

                if ( fb_text == ft_text && items_shown < items_shown_max )
                {
                    items_shown++
                    $_dyn_item.show().css( CSS_SHOW )
                }
                else
                {
                    $_dyn_item.css( CSS_HIDE )
                } 
            })
        })
    })

    // * Reset button *
    let $_reset = $(this).find( S_FILTERS ).find( S_RESET )

    $_reset.click(function()
    {
        hide_dyn_items()
        show_max_dyn_items()
        items_shown = max_n_of_items_to_be_shown()
        max_items_available = max_n_of_items
        clear_filters(0)
    })

    // * Clear other filters *
    function clear_filters(n)
    {
        if (n !== 1) { $_search.val('') }
        if (n !== 2) { $_filter_buttons.removeClass( 'is-active' ) }
        if (n !== 3) { should_load_more_be_shown( items_shown, max_items_available ) }
    }

    // * Useful functions
    function hide_dyn_items()
    {
        $_this_list.find( S_DYN_ITEM ).css( CSS_HIDE )
    }
    function show_max_dyn_items()
    {
        $_this_list.find( S_DYN_ITEM + ':lt(' + max_n_of_items_to_be_shown() + ')' ).show().css( CSS_SHOW )
    }

    // * Load more *
    let $_load_more = $(this).find( S_BUTTON )
    
    let paginate_by = 8
    let times_loaded = 1
    let max_n_of_items = $_this_list.find( S_DYN_ITEM ).length
    function max_n_of_items_to_be_shown()
    {
        return paginate_by * times_loaded
    }

    let items_shown = max_n_of_items_to_be_shown()
    let max_items_available = max_n_of_items
    
    hide_dyn_items()
    show_max_dyn_items()
    
    $_load_more.click(function() 
    {
        times_loaded++
        clear_filters(3)
        show_max_dyn_items()
        should_load_more_be_shown( max_n_of_items_to_be_shown(), max_n_of_items )
    })

    function should_load_more_be_shown( items_shown, max_items_available )
    {
        if ( items_shown < max_items_available )
        {
            $_load_more.show()
        }
        else
        {
            $_load_more.hide()
        }
    }
    
})

}) // The end.
</script>