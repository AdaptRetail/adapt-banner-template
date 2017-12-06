import mustache from 'mustache';
import DOMHandler from './DOMHandler';

export default class Frame {

    constructor( data ){
        this.data = this.format( data );
    }

    /**
     * Set the content of each frame
     *
     * @return string
     */
    template() {
        return require( '../../views/product.template.html' );
    }

    /**
     * Format the data provided in constructor
     *
     * @return Object
     */
    format( item ) {

        /**
         * Split the price now to become array with integer and decimal
         * If no decimal is found, we set as 00
         */
        var tmpPrice = item.pricenow.split( /[,\.]/ );

        return {
            name: item.name,
            image: adaptData.asset( item.image ),
            vendorlogo: adaptData.asset( item.vendorlogo ),
            pricematch: item.pricematch === "1",
            threefortwo: item.threefortwo === "1",
            description: item.descriptionshort,
            price: {
                integer: tmpPrice[0],
                decimal: tmpPrice.length >= 2 ? tmpPrice[1] : '00',
            },

            /**
             * Set the url to google analytics if url does not exists
             */
            url: item.url || 'https://google.com' + response.details.ga_url + '&utm_content=' + item.id,
        }

    }

    /**
     * Set an event when we click on the frame.
     *
     * @return void
     */
    onClick() {}

    /**
     * This is called when the frame is swiped to
     *
     * Set backgroundImage to every element that has data-background-image attribute
     * This is to lazy load images to save load time for banner.
     *
     * @return void
     */
    onSwipeTo() {
        var backgroundImageElements = this.template.querySelectorAll( '[data-background-image]' )
        for (var i = 0, len = backgroundImageElements.length; i < len; i++) {
            var tmp = backgroundImageElements[i];
            tmp.style.backgroundImage = 'url(' + tmp.getAttribute( 'data-background-image' ) + ')';
        }
    }


    /**
     * This is called when the frame is swiped to
     *
     * @return void
     */
    onSwipeFrom() {}

    /**
     * Render the template and set the
     * new template as a DOMElement
     *
     * @return DOMElement
     */
    render() {
        return this.template = DOMHandler.htmlToDOM(
            mustache.render( this.template(), this.data )
        );
    }

}
