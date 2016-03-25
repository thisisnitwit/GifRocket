const config = {
    color: '#225159'
};

class Script {
    /**
     * @params {object} request
     */
    prepare_outgoing_request({ request }) {
        const trigger = request.data.trigger_word.toLowerCase() + ' ';
        const phrase = request.data.text.toLowerCase().replace(trigger, '').replace(/ /g, '+');

        let u = request.url + '?api_key=dc6zaTOxFJmzC&limit=1&q=' + phrase;
        console.log(u);
        return {
            url: u,
            headers: request.headers,
            method: 'GET'
        };
    }

    process_outgoing_response({ request, response }) {
        const gif = response.content.data[0].images.original.url;
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