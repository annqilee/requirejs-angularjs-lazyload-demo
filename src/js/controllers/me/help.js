window.application.components.controller('HelpCtrl', function($scope) {
    $scope.helps = [

        {
            html: '关于我们',
            link: '#/me/help/about'
        },
        {
            html: '使用帮助',
            link: '#/me/help/help'
        },
        {
            html: '联系客服',
            link: '#/me/help/service'
        },
        {
            html: '用户反馈',
            link: '#/me/help/feedback'
        }


    ]
})
