// requisição
postFetch.interceptors.request.use(
    function(config) {
            console.log("antes da requisição...")
            return config;
        },
        function(error){
            return Promise.reject(error);

        }
    );

// resposta

postFetch.interceptors.request.use(
    function(response) {
            console.log("antes da resposta...")
            return config;
        },
        function(error){
            return Promise.reject(error);

        }
    );