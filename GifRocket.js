const config = {
    color: '#225159'
};

class Script {
    /**
     * @params {object} request
     * @params {string} trigger
     */
    prepare_outgoing_request({ request }) {
        const trigger = request.data.trigger_word.toLowerCase() + ' ';
        phrase = request.data.text.toLowerCase().replace(trigger, '').replace(/ /g, '+');
        let u = '';
        if(phrase == 'random') {
            u = request.url + 'random?api_key=dc6zaTOxFJmzC&limit=1';
        } else {
            u = request.url + 'search?api_key=dc6zaTOxFJmzC&q=' + phrase;
        }
        return {
            url: u,
            headers: request.headers,
            method: 'GET'
        };
    }

    process_outgoing_response({ request, response }) {
        let gif = '';
        if((request.url == 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&limit=1') || (request.url == 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&limit=1')) {
            gif = response.content.data.image_original_url;
        } else {
            const count = response.content.data.length - 1;
            const i = Math.floor((Math.random() * count));
            gif = response.content.data[i].images.original.url;
        }
        return {
            content: {
                attachments: [
                    {
                        image_url: gif,
                        color: ((config['color'] != '') ? '#' + config['color'].replace('#', '') : '#225159')
                    }
                ]
            }
        };
    }
}