(function ($) {
    function closeActionMenus() {
        $('.table-action-menu-list').hide();
    }

    function bindActions(table) {
        table.find('.table-action-menu-btn').off('click.menu').on('click.menu', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var menu = $(this).closest('.table-action-menu');
            var list = menu.find('.table-action-menu-list');

            if (list.is(':visible')) {
                list.hide();
            } else {
                closeActionMenus();
                list.show();
            }
        });

        table.find('.table-action-menu-list a').off('click.menuItem').on('click.menuItem', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).closest('.table-action-menu-list').hide();
        });
    }

    function initExpandableTable(table) {
        table.children('thead').children('tr').append('<th>Manage</th>');
        table.children('tbody').children('tr').filter(':odd').hide();

        table.children('tbody').children('tr').filter(':even').each(function () {
            var element = $(this);
            var button = element.find('.table-expandable-btn');

            if (!button.length) {
                element.append(
                    '<td>' +
                    '<div class="table-action-cell table-manage-cell">' +
                    '<button class="renew-btn">Renew</button>' +
                    '<div class="table-expandable-btn"><div class="table-expandable-arrow"></div></div>' +
                    '<div class="table-action-menu">' +
                    '<div class="action-menu-btn table-action-menu-btn">&#8230;</div>' +
                    '<div class="table-action-menu-list" style="display:none;">' +
                    '<ul><li><a href="#">Renew</a></li></ul>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</td>'
                );
            }

            element.find('.table-expandable-btn').off('click.expand').on('click.expand', function (e) {
                e.preventDefault();
                e.stopPropagation();

                var row = $(this).closest('tr');
                var detail = row.next('tr');

                if (detail.length) {
                    detail.toggle('slow');
                    $(this).find('.table-expandable-arrow').toggleClass('up');
                }
            });
        });

        bindActions(table);
    }

    $(function () {
        $('.table-expandable').each(function () {
            initExpandableTable($(this));
        });

        $('.table-expandable2').each(function () {
            var table = $(this);
            table.children('thead').children('tr').append('<th></th>');
            table.children('tbody').children('tr').filter(':odd').hide();
            table.children('tbody').children('tr').filter(':even').click(function () {
                var element = $(this);
                element.next('tr').toggle('slow');
                element.find('.table-expandable-arrow').toggleClass('up');
            });
            table.children('tbody').children('tr').filter(':even').each(function () {
                var element = $(this);
                element.append('<td><div class="table-expandable-arrow"></div></td>');
            });
        });

        $(document).on('click', function (e) {
            if (!$(e.target).closest('.table-action-menu').length) {
                closeActionMenus();
            }
        });
    });
})(jQuery);