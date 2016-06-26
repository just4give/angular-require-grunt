
    require.config({
        priority: "angular",
        paths: {
            angular: "../../lib/angular/angular",
            "angular-ui-router": "../../lib/angular-ui-router/release/angular-ui-router",
            "requirejs-domready": "../../lib/requirejs-domready/domReady"
        },
        shim: {
            angular: {
                exports: "angular"
            }
        },
        packages: [
    
        ]
    });
    window.name = 'NG_DEFER_BOOTSTRAP!';

    require([

        'angular',
        'app'
    ], function(angular,app){




        angular.element(document).ready(function(){

            angular.bootstrap(document,[app.name]);

        });

    });


