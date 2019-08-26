function getCurrentUserData() {
    // This would be identifying information about the user whose session this is
    // ID should be enough to determine session and to get more data from the backend
    // if need be, but could include name or anything else relevant
    return {
        registrationID: 'id74',
    };
}

function processRegistration(data){
    /* this would send the data to the backend for further processing to
    determine who they would be able to choose in the ranking step */
    console.log(data);
}

function processRanking(data){
    /* this would send the data to the backend for further processing 
    via the algorithms that would determine their final matches */
    console.log(data);
}

function handleRegistration() {
    $('.js-registration-submit').click(function() {
        var registrationData = {};
        var formArray = $('#registration-form').serializeArray();

        for (var i = 0; i < formArray.length; i++) {
            registrationData[formArray[i].name] = formArray[i].value;
        }

        processRegistration(registrationData);
    });
}

function initRankingGrid() {
    var grid = new Muuri('.ranking-grid', {
        dragEnabled: true
    });

    $('.js-ranking-grid-item:nth-child(-n+10)').addClass('ranking-grid__item--top-ten');

    grid.on('layoutEnd', function (items) {
        $('.js-ranking-grid-item').removeClass('ranking-grid__item--top-ten');

        for (var i = 0; i < 10; i++) {
            $(items[i]._element).addClass('ranking-grid__item--top-ten');
        }
    });

    function _handleRanking() {
        $('.js-ranking-submit').click(function(){
            var rankingData = {};
            var items = grid.getItems();

            for (var i = 0; i < items.length; i++) {
                rankingData[i] = $(items[i]._element).data('id');
            }

            processRanking({user: getCurrentUserData(), rankingData: rankingData});
        });
    }

    _handleRanking();
}

$(document).ready(function() {
    if ($('body').hasClass('signup-page')) {
        handleRegistration();
    } 

    if ($('body').hasClass('ranking-page')) {
        initRankingGrid();
    }
});
