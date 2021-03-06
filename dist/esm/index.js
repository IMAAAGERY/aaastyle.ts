import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { forwardRef, useEffect, useRef, useState, useImperativeHandle } from 'react';
import styled, { ThemeProvider, css, keyframes } from 'styled-components';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var ViewStyle = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tposition: fixed;\n\tz-index: 100;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tflex-direction: row;\n\tbackground-color: ", ";\n\tflex-wrap: wrap;\n\toverflow-x: hidden;\n\tbox-sizing: border-box;\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"], ["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tposition: fixed;\n\tz-index: 100;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tflex-direction: row;\n\tbackground-color: ", ";\n\tflex-wrap: wrap;\n\toverflow-x: hidden;\n\tbox-sizing: border-box;\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"])), function (props) { return props.theme.view.backgroundColor; });
var ContainerStyle = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n\tposition: relative;\n\tflex-direction: ", ";\n\tdisplay: flex;\n\tbackground-color: ", ";\n\tpadding: 8px;\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"], ["\n\tposition: relative;\n\tflex-direction: ", ";\n\tdisplay: flex;\n\tbackground-color: ", ";\n\tpadding: 8px;\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"])), function (props) { return (props.vertical ? 'column' : 'row'); }, function (props) { return props.theme.container.backgroundColor; });
var BoxStyle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: ", ";\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tborder-radius: 12px;\n\tbox-sizing: border-box;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tbackground-color: ", ";\n\tpadding: 8px;\n\tmargin: 8px;\n\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: ", ";\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tborder-radius: 12px;\n\tbox-sizing: border-box;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tbackground-color: ", ";\n\tpadding: 8px;\n\tmargin: 8px;\n\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"])), function (props) { return (props.vertical ? 'column' : 'row'); }, function (props) { return props.theme.box.backgroundColor; });
var MasterDetailStyle = styled.div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\tflex-grow: 1;\n\n\t@media (max-width: 768px) {\n\t\tflex-grow: unset;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\tflex-grow: 1;\n\n\t@media (max-width: 768px) {\n\t\tflex-grow: unset;\n\t}\n"])));
var MasterDetailGroupTitleStyle = styled.span(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-self: flex-start;\n"], ["\n\tdisplay: flex;\n\talign-self: flex-start;\n"])));
var DialogBackgroundStyle = styled.div(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: ", ";\n\tposition: fixed;\n\tz-index: 1000;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-color: ", ";\n\tmargin: 0;\n\tpadding: 100px 0;\n\tbox-sizing: border-box;\n"], ["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: ", ";\n\tposition: fixed;\n\tz-index: 1000;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-color: ", ";\n\tmargin: 0;\n\tpadding: 100px 0;\n\tbox-sizing: border-box;\n"])), function (props) { return (props.position === 'top' ? 'flex-start' : props.position === 'bottom' ? 'flex-end' : 'center'); }, function (props) { return props.theme.dialogBackground.backgroundColor; });
var DialogStyle = styled.div(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: start;\n\tmin-width: 200px;\n\tmin-height: 200px;\n\tbackground-color: ", ";\n\tbox-sizing: border-box;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tborder-radius: 12px;\n\tpadding: 8px;\n\tcolor: ", ";\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: start;\n\tmin-width: 200px;\n\tmin-height: 200px;\n\tbackground-color: ", ";\n\tbox-sizing: border-box;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tborder-radius: 12px;\n\tpadding: 8px;\n\tcolor: ", ";\n"])), function (props) { return props.theme.dialog.backgroundColor; }, function (props) { return props.theme.dialog.color; });
var SidebarStyle = styled.aside(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n\tposition: sticky;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tleft: 0;\n\ttop: 0;\n\theight: 100vh;\n\twidth: ", ";\n\toverflow-x: hidden;\n\ttransition: 0.5s;\n\twhite-space: nowrap;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t@media (max-width: 768px) {\n\t\t/* position: absolute; */\n\t\twidth: ", ";\n\t}\n"], ["\n\tposition: sticky;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tleft: 0;\n\ttop: 0;\n\theight: 100vh;\n\twidth: ", ";\n\toverflow-x: hidden;\n\ttransition: 0.5s;\n\twhite-space: nowrap;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t@media (max-width: 768px) {\n\t\t/* position: absolute; */\n\t\twidth: ", ";\n\t}\n"])), function (props) { return (props.collapsed ? '70px' : '250px'); }, function (props) { return props.theme.sidebar.backgroundColor; }, function (props) { return props.theme.sidebar.color; }, function (props) { return (props.collapsed ? '0' : '200px'); });
var SidebarItemStyle = styled.div(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\twidth: 100%;\n\tmin-height: 50px;\n\tpadding: 8px;\n\tbox-sizing: border-box;\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\twidth: 100%;\n\tmin-height: 50px;\n\tpadding: 8px;\n\tbox-sizing: border-box;\n"])), function (props) { return props.theme.sidebarItem.color; }, function (props) { return props.theme.sidebarItem.backgroundColor; });
var NavbarStyle = styled.div(templateObject_10$2 || (templateObject_10$2 = __makeTemplateObject(["\n\tposition: sticky;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tleft: 0;\n\ttop: 0;\n\tmin-height: 60px;\n\twidth: 100%;\n\toverflow: hidden;\n\ttransition: 0.5s;\n\twhite-space: nowrap;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tpadding: 0;\n\tbox-sizing: border-box;\n"], ["\n\tposition: sticky;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tleft: 0;\n\ttop: 0;\n\tmin-height: 60px;\n\twidth: 100%;\n\toverflow: hidden;\n\ttransition: 0.5s;\n\twhite-space: nowrap;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tpadding: 0;\n\tbox-sizing: border-box;\n"])), function (props) { return props.theme.navbar.backgroundColor; }, function (props) { return props.theme.navbar.color; });
var NavbarItemStyle = styled.div(templateObject_11$2 || (templateObject_11$2 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\twidth: 100%;\n\tmin-height: 50px;\n\tpadding: 8px;\n\tbox-sizing: border-box;\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\twidth: 100%;\n\tmin-height: 50px;\n\tpadding: 8px;\n\tbox-sizing: border-box;\n"])), function (props) { return props.theme.navbarItem.color; }, function (props) { return props.theme.navbarItem.backgroundColor; });
var templateObject_1$4, templateObject_2$4, templateObject_3$4, templateObject_4$4, templateObject_5$4, templateObject_6$3, templateObject_7$3, templateObject_8$2, templateObject_9$2, templateObject_10$2, templateObject_11$2;

var Box = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme, vertical = props.vertical;
    return (jsx(BoxStyle, __assign({ ref: ref, theme: theme, style: style, className: className, vertical: vertical }, { children: children })));
});

var Container = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme, vertical = props.vertical;
    return (jsx(ContainerStyle, __assign({ theme: theme, ref: ref, style: style, className: className, vertical: vertical }, { children: children })));
});

var useClickOutside = function (ref, callback) {
    useEffect(function () {
        var startedInside = false;
        var startedWhenMounted = false;
        var listener = function (event) {
            // Do nothing if `mousedown` or `touchstart` started inside ref element
            if (startedInside || !startedWhenMounted)
                return;
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target))
                return;
            callback(event);
        };
        var validateEventStart = function (event) {
            startedWhenMounted = ref.current;
            startedInside = ref.current && ref.current.contains(event.target);
        };
        document.addEventListener('mousedown', validateEventStart);
        document.addEventListener('touchstart', validateEventStart);
        document.addEventListener('click', listener);
        document.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                callback(event);
            }
        });
        return function () {
            document.removeEventListener('mousedown', validateEventStart);
            document.removeEventListener('touchstart', validateEventStart);
            document.removeEventListener('click', listener);
            document.removeEventListener('keyup', listener);
        };
    }, [ref, callback]);
};

var Dialog = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, theme = props.theme, className = props.className, closeOnClickOutside = props.closeOnClickOutside, position = props.position, onClose = props.onClose;
    var dialogRef = useRef(null);
    useClickOutside(dialogRef, onClose);
    return (jsx(DialogBackgroundStyle, __assign({ position: position, ref: ref }, { children: jsx(DialogStyle, __assign({ ref: closeOnClickOutside ? dialogRef : undefined, theme: theme, style: style, className: className }, { children: children })) })));
});

var ListStyle = styled.ul(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tlist-style: none;\n\tcolor: ", ";\n\tborder-radius: 12px;\n\tpadding: 0;\n\tmargin: 12px;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\ttransition: 0.3s;\n"], ["\n\tbox-sizing: border-box;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tlist-style: none;\n\tcolor: ", ";\n\tborder-radius: 12px;\n\tpadding: 0;\n\tmargin: 12px;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\ttransition: 0.3s;\n"])), function (props) { return props.theme.list.color; });
var ListItemStyle = styled.li(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n\tposition: relative;\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\tcursor: pointer;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tbox-sizing: border-box;\n\tline-height: 2.5;\n\twidth: 100%;\n\n\t&:hover {\n\t\topacity: 0.8;\n\t}\n"], ["\n\tposition: relative;\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\tcursor: pointer;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tbox-sizing: border-box;\n\tline-height: 2.5;\n\twidth: 100%;\n\n\t&:hover {\n\t\topacity: 0.8;\n\t}\n"])), function (props) { return props.theme.listItem.color; }, function (props) { return props.theme.listItem.backgroundColor; });
var DropdownWrapperStyle = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 4px;\n\tbackground-color: #ffffff;\n\tpadding: 0;\n\tborder: ", ";\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 4px;\n\tbackground-color: #ffffff;\n\tpadding: 0;\n\tborder: ", ";\n"])), function (props) { return (props.show ? '1px solid rgba(144, 144, 144, 0.3)' : 'none'); });
var DropdownListStyle = styled.ul(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\ttransition: max-height 0.5s;\n\tmax-height: ", ";\n\toverflow: hidden;\n"], ["\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\ttransition: max-height 0.5s;\n\tmax-height: ", ";\n\toverflow: hidden;\n"])), function (props) { return (props.show ? '500px' : '0'); });
var DropdownItemStyle = styled.li(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tcursor: pointer;\n\tpadding: 8px 12px;\n\tmargin: 0;\n\tmin-width: 100px;\n\tmin-height: 40px;\n\n\t&:hover {\n\t\t/* opacity: 0.8; */\n\t\tbackground-color: rgba(144, 144, 144, 0.3);\n\t}\n"], ["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tcursor: pointer;\n\tpadding: 8px 12px;\n\tmargin: 0;\n\tmin-width: 100px;\n\tmin-height: 40px;\n\n\t&:hover {\n\t\t/* opacity: 0.8; */\n\t\tbackground-color: rgba(144, 144, 144, 0.3);\n\t}\n"])));
var templateObject_1$3, templateObject_2$3, templateObject_3$3, templateObject_4$3, templateObject_5$3;

var List = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme;
    return (jsx(ListStyle, __assign({ ref: ref, style: style, className: className, theme: theme }, { children: children })));
});

var ListItem = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme, onClick = props.onClick;
    return (jsx(ListItemStyle, __assign({ onClick: onClick, ref: ref, style: style, theme: theme, className: className }, { children: children })));
});

var Sidebar = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme, collapsed = props.collapsed;
    return (jsx(SidebarStyle, __assign({ theme: theme, ref: ref, style: style, className: className, collapsed: collapsed }, { children: children })));
});

var SidebarItem = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme;
    return (jsx(SidebarItemStyle, __assign({ ref: ref, theme: theme, style: style, className: className }, { children: children })));
});

var MasterDetail = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme, header = props.header, footer = props.footer, collapsed = props.collapsed;
    var _a = useState(), currentContent = _a[0], setCurrentContent = _a[1];
    return (jsxs(MasterDetailStyle, __assign({ ref: ref, style: style, theme: theme, className: className }, { children: [jsxs(Sidebar, __assign({ collapsed: collapsed }, { children: [header && jsx(SidebarItem, { children: header }), children === null || children === void 0 ? void 0 : children.map(function (group, index) {
                        var _a;
                        return (jsxs(SidebarItem, { children: [jsx(MasterDetailGroupTitleStyle, { children: collapsed ? group.collapsedTitle : group.title }), jsx(List, { children: (_a = group.items) === null || _a === void 0 ? void 0 : _a.map(function (item, index) { return (jsx(ListItem, __assign({ onClick: function () { return setCurrentContent(item.content); } }, { children: collapsed ? item.collapsedTitle : item.title }), index)); }) })] }, index));
                    }), footer && jsx(SidebarItem, __assign({ style: { justifySelf: 'flex-end' } }, { children: footer }))] })), jsx(Container, __assign({ vertical: true, style: { backgroundColor: '#f2f2f7', borderLeft: '1px solid rgba(144, 144, 144, 0.3)', flexGrow: 1 } }, { children: currentContent }))] })));
});

var DEFAULT_THEME = {
    button: {
        backgroundColor: {
            primary: '#007bff',
            secondary: '#6c757d',
            warning: '#ffc107',
            danger: '#dc3545',
            info: '#17a2b8',
            success: '#28a745',
            dark: '#343a40',
            light: '#f8f9fa',
        },
        borderColor: {
            primary: '#007bff',
            secondary: '#6c757d',
            warning: '#ffc107',
            danger: '#dc3545',
            info: '#17a2b8',
            success: '#28a745',
            dark: '#343a40',
            light: '#f8f9fa',
        },
        color: {
            primary: '#ffffff',
            secondary: '#ffffff',
            warning: '#000000',
            danger: '#000000',
            info: '#000000',
            success: '#000000',
            dark: '#ffffff',
            light: '#000000',
        },
    },
    sidebar: {
        backgroundColor: '#f2f2f7',
        color: '#000000',
    },
    sidebarItem: {
        backgroundColor: '#f2f2f7',
        color: '#000000',
    },
    navbar: {
        backgroundColor: '#f2f2f7',
        color: '#000000',
    },
    navbarItem: {
        backgroundColor: '#f2f2f7',
        color: '#000000',
    },
    container: {
        backgroundColor: 'transparent',
    },
    view: {
        backgroundColor: 'transparent',
    },
    list: {
        backgroundColor: '#ffffff',
        borderColor: 'transparent',
        color: '#000000',
    },
    listItem: {
        backgroundColor: 'transparent',
        color: '#000000',
    },
    dialog: {
        backgroundColor: '#ffffff',
        color: '#000000',
    },
    dialogBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    card: {
        backgroundColor: '#ffffff',
    },
    toast: {
        backgroundColor: '#ffffff',
    },
    box: {
        backgroundColor: '#ffffff',
    },
    input: {
        backgroundColor: '#ffffff',
        color: '#000000',
    },
    icon: {
        backgroundColor: 'transparent',
        color: '#000000',
    },
    label: {
        backgroundColor: 'transparent',
        color: 'transparent',
    },
    fab: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'transparent',
    },
    select: {
        backgroundColor: '#ffffff',
        color: '#ffffff',
    },
    option: {
        backgroundColor: '#ffffff',
        selectedBackgroundColor: '#ffffff',
        hoverBackgroundColor: '#ffffff',
        color: '#ffffff',
        selectedColor: '#ffffff',
        hoverColor: '#ffffff',
    },
};

var View = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme;
    return (jsx(ThemeProvider, __assign({ theme: theme || DEFAULT_THEME }, { children: jsx(ViewStyle, __assign({ style: style, className: className, ref: ref }, { children: children })) })));
});

var NavbarItem = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme;
    return (jsx(NavbarItemStyle, __assign({ ref: ref, theme: theme, style: style, className: className }, { children: children })));
});

var Navbar = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme;
    return (jsx(NavbarStyle, __assign({ theme: theme, ref: ref, style: style, className: className }, { children: children })));
});

var ButtonStyle = styled.button(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 40px;\n\tmin-width: 120px;\n\tmargin: 8px;\n\tborder-radius: 4px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\tfont-weight: bold;\n\tpadding: 12px 24px;\n\n\t&:hover {\n\t\topacity: 0.8;\n\t}\n\n\t", "\n\n\t", "\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 40px;\n\tmin-width: 120px;\n\tmargin: 8px;\n\tborder-radius: 4px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\tfont-weight: bold;\n\tpadding: 12px 24px;\n\n\t&:hover {\n\t\topacity: 0.8;\n\t}\n\n\t", "\n\n\t", "\n"])), function (props) { return "".concat(props.theme.button.color[props.color]); }, function (props) {
    return (props.variant === 'outlined' && css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n\t\t\t\tcolor: #000000;\n\t\t\t\tborder: 3px solid ", ";\n\t\t\t\tbackground: none;\n\t\t\t"], ["\n\t\t\t\tcolor: #000000;\n\t\t\t\tborder: 3px solid ", ";\n\t\t\t\tbackground: none;\n\t\t\t"])), props.theme.button.borderColor[props.color])) ||
        (props.variant === 'contained' && css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n\t\t\t\tborder: none;\n\t\t\t\tbackground: ", ";\n\t\t\t"], ["\n\t\t\t\tborder: none;\n\t\t\t\tbackground: ", ";\n\t\t\t"])), props.theme.button.backgroundColor[props.color])) ||
        (props.variant === 'text' && css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n\t\t\t\tcolor: #000000;\n\t\t\t\tborder: none;\n\t\t\t\tbackground: none;\n\t\t\t\tpadding: 0;\n\t\t\t\tmin-width: 0;\n\t\t\t"], ["\n\t\t\t\tcolor: #000000;\n\t\t\t\tborder: none;\n\t\t\t\tbackground: none;\n\t\t\t\tpadding: 0;\n\t\t\t\tmin-width: 0;\n\t\t\t"]))));
}, function (props) {
    return (props.shape === 'rounded' && css(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n\t\t\t\tborder-radius: 12px;\n\t\t\t"], ["\n\t\t\t\tborder-radius: 12px;\n\t\t\t"])))) ||
        (props.shape === 'pill' && css(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n\t\t\t\tborder-radius: 200px;\n\t\t\t"], ["\n\t\t\t\tborder-radius: 200px;\n\t\t\t"])))) ||
        (props.shape === 'sharp' && css(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n\t\t\t\tborder-radius: 0;\n\t\t\t"], ["\n\t\t\t\tborder-radius: 0;\n\t\t\t"]))));
});
var ButtonContentStyle = styled.span(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tz-index: 2;\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tz-index: 2;\n"])));
var rippleEffect = keyframes(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n\t0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(10);\n    opacity: 0.375;\n  }\n  100% {\n    transform: scale(35);\n    opacity: 0;\n  }\n"], ["\n\t0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(10);\n    opacity: 0.375;\n  }\n  100% {\n    transform: scale(35);\n    opacity: 0;\n  }\n"])));
var ButtonRippleStyle = styled.span(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n\twidth: 25px;\n\theight: 25px;\n\tposition: absolute;\n\tdisplay: block;\n\tcontent: '';\n\tborder-radius: 200px;\n\tanimation: 0.9s ease 1 forwards ", ";\n\tleft: ", "px;\n\ttop: ", "px;\n\tbackground-color: #e6e6e6;\n"], ["\n\twidth: 25px;\n\theight: 25px;\n\tposition: absolute;\n\tdisplay: block;\n\tcontent: '';\n\tborder-radius: 200px;\n\tanimation: 0.9s ease 1 forwards ", ";\n\tleft: ", "px;\n\ttop: ", "px;\n\tbackground-color: #e6e6e6;\n"])), rippleEffect, function (props) { return props.left; }, function (props) { return props.top; });
var ToggleSwitchWrapperStyle = styled.div(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n\tposition: relative;\n\tmargin: 4px;\n"], ["\n\tposition: relative;\n\tmargin: 4px;\n"])));
var ToggleSwitchLabelStyle = styled.label(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 42px;\n\theight: 26px;\n\tborder-radius: 15px;\n\tbackground: #bebebe;\n\tcursor: pointer;\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tborder-radius: 50%;\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tmargin: 3px;\n\t\tbackground: #ffffff;\n\t\tbox-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n\t\ttransition: 0.2s;\n\t}\n"], ["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 42px;\n\theight: 26px;\n\tborder-radius: 15px;\n\tbackground: #bebebe;\n\tcursor: pointer;\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tborder-radius: 50%;\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tmargin: 3px;\n\t\tbackground: #ffffff;\n\t\tbox-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n\t\ttransition: 0.2s;\n\t}\n"])));
var ToggleSwitchStyle = styled.input(templateObject_13$1 || (templateObject_13$1 = __makeTemplateObject(["\n\topacity: 0;\n\tz-index: 1;\n\tborder-radius: 15px;\n\twidth: 42px;\n\theight: 26px;\n\tmargin: 0;\n\t&:checked + ", " {\n\t\tbackground: #4fbe79;\n\t\t&::after {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t\tmargin-left: 21px;\n\t\t\ttransition: 0.2s;\n\t\t}\n\t}\n\n\t&:disabled + ", " {\n\t\tbackground: #cccccc;\n\t\tcursor: default;\n\t}\n"], ["\n\topacity: 0;\n\tz-index: 1;\n\tborder-radius: 15px;\n\twidth: 42px;\n\theight: 26px;\n\tmargin: 0;\n\t&:checked + ", " {\n\t\tbackground: #4fbe79;\n\t\t&::after {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t\tmargin-left: 21px;\n\t\t\ttransition: 0.2s;\n\t\t}\n\t}\n\n\t&:disabled + ", " {\n\t\tbackground: #cccccc;\n\t\tcursor: default;\n\t}\n"])), ToggleSwitchLabelStyle, ToggleSwitchLabelStyle);
var ToggleButtonStyle = styled.button(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 40px;\n\twidth: 40px;\n\tmargin: 4px;\n\tborder-radius: 4px;\n\toverflow: hidden;\n\tborder: none;\n\tbackground-color: ", ";\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: ", ";\n\t}\n\n\t", "\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 40px;\n\twidth: 40px;\n\tmargin: 4px;\n\tborder-radius: 4px;\n\toverflow: hidden;\n\tborder: none;\n\tbackground-color: ", ";\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: ", ";\n\t}\n\n\t", "\n"])), function (props) { return (props.selected ? '#cccccc' : '#ffffff'); }, function (props) { return (props.selected ? '#cccccc' : '#f2f2f7'); }, function (props) {
    return (props.positionInGroup === 'first' && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\t\t\t\tborder-top-left-radius: 4px !important;\n\t\t\t\tborder-bottom-left-radius: 4px !important;\n\t\t\t"], ["\n\t\t\t\tborder-top-left-radius: 4px !important;\n\t\t\t\tborder-bottom-left-radius: 4px !important;\n\t\t\t"])))) ||
        (props.positionInGroup === 'last' && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n\t\t\t\tborder-top-right-radius: 4px !important;\n\t\t\t\tborder-bottom-right-radius\u00EB: 4px !important;\n\t\t\t"], ["\n\t\t\t\tborder-top-right-radius: 4px !important;\n\t\t\t\tborder-bottom-right-radius\u00EB: 4px !important;\n\t\t\t"]))));
});
var ToggleButtonGroupStyle = styled.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: ", ";\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #909090;\n\tborder-radius: 4px;\n\tbox-sizing: border-box;\n\twidth: fit-content;\n\tpadding: 0;\n\n\t& * {\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t}\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: ", ";\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #909090;\n\tborder-radius: 4px;\n\tbox-sizing: border-box;\n\twidth: fit-content;\n\tpadding: 0;\n\n\t& * {\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t}\n"])), function (props) { return (props.orientation === 'horizontal' ? 'row' : 'column'); });
var FABStyle = styled.button(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n\tcursor: pointer;\n\twidth: fit-content;\n\theight: fit-content;\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\toverflow: hidden;\n\tborder-radius: ", ";\n\tfont-weight: bold;\n\tborder: 1px solid;\n\tbackground-color: ", ";\n\tborder-color: ", ";\n\tmin-width: ", ";\n\tpadding: 12px;\n\t& * {\n\t\tpadding: 0;\n\t}\n"], ["\n\tcursor: pointer;\n\twidth: fit-content;\n\theight: fit-content;\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\toverflow: hidden;\n\tborder-radius: ", ";\n\tfont-weight: bold;\n\tborder: 1px solid;\n\tbackground-color: ", ";\n\tborder-color: ", ";\n\tmin-width: ", ";\n\tpadding: 12px;\n\t& * {\n\t\tpadding: 0;\n\t}\n"])), function (props) { return props.extended ? '200px' : '100%'; }, function (props) { return props.theme.fab.backgroundColor; }, function (props) { return props.theme.fab.borderColor; }, function (props) { return props.extended ? '200px' : 'unset'; });
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4$2, templateObject_5$2, templateObject_6$2, templateObject_7$2, templateObject_8$1, templateObject_9$1, templateObject_10$1, templateObject_11$1, templateObject_12$1, templateObject_13$1, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var ToggleSwitch = forwardRef(function (props, ref) {
    var style = props.style, className = props.className, onClick = props.onClick, onChange = props.onChange, disabled = props.disabled, checked = props.checked;
    var id = v4();
    return (jsxs(ToggleSwitchWrapperStyle, { children: [jsx(ToggleSwitchStyle, { ref: ref, style: style, className: className, disabled: disabled, checked: checked, onChange: onChange, onClick: onClick, id: "toggleSwitch-".concat(id), type: 'checkbox' }), jsx(ToggleSwitchLabelStyle, { htmlFor: "toggleSwitch-".concat(id) })] }));
});

var Button = forwardRef(function (props, ref) {
    var children = props.children, className = props.className, style = props.style, theme = props.theme, variant = props.variant, color = props.color, shape = props.shape, disabled = props.disabled, onClick = props.onClick;
    var _a = useState({ x: -1, y: -1 }), coords = _a[0], setCoords = _a[1];
    var _b = useState(false), isRippling = _b[0], setIsRippling = _b[1];
    useEffect(function () {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(function () { return setIsRippling(false); }, 300);
        }
        else
            setIsRippling(false);
    }, [coords]);
    useEffect(function () {
        if (!isRippling)
            setCoords({ x: -1, y: -1 });
    }, [isRippling]);
    var handleClick = function (e) {
        var node = e.target;
        var rect = node.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
    };
    return (jsxs(ButtonStyle, __assign({ ref: ref, disabled: disabled, theme: theme, className: className, style: style, onClick: handleClick, variant: variant || 'contained', color: color || 'primary', shape: shape || 'rounded' }, { children: [jsx(ButtonContentStyle, { children: children }), isRippling && jsx(ButtonRippleStyle, { left: coords.x, top: coords.y })] })));
});

var FAB = forwardRef(function (props, ref) {
    useRef();
    var className = props.className, style = props.style, onClick = props.onClick, theme = props.theme, children = props.children, extended = props.extended;
    var _a = useState({ x: -1, y: -1 }), coords = _a[0], setCoords = _a[1];
    var _b = useState(false), isRippling = _b[0], setIsRippling = _b[1];
    useEffect(function () {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(function () { return setIsRippling(false); }, 300);
        }
        else
            setIsRippling(false);
    }, [coords]);
    useEffect(function () {
        if (!isRippling)
            setCoords({ x: -1, y: -1 });
    }, [isRippling]);
    var handleClick = function (e) {
        var node = e.target;
        var rect = node.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
    };
    return (jsxs(FABStyle, __assign({ extended: extended || false, ref: ref, className: className, style: style, theme: theme, onClick: handleClick }, { children: [jsx(ButtonContentStyle, { children: children }), isRippling && jsx(ButtonRippleStyle, { left: coords.x, top: coords.y })] })));
});

var ToggleButton = forwardRef(function (props, ref) {
    var theme = props.theme, children = props.children, style = props.style, className = props.className, onClick = props.onClick, selected = props.selected, positionInGroup = props.positionInGroup;
    var _a = useState(selected || false), clicked = _a[0], setClicked = _a[1];
    var _b = useState({ x: -1, y: -1 }), coords = _b[0], setCoords = _b[1];
    var _c = useState(false), isRippling = _c[0], setIsRippling = _c[1];
    useEffect(function () {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(function () { return setIsRippling(false); }, 300);
        }
        else
            setIsRippling(false);
    }, [coords]);
    useEffect(function () {
        if (!isRippling)
            setCoords({ x: -1, y: -1 });
    }, [isRippling]);
    useEffect(function () {
        if (typeof selected !== 'undefined')
            setClicked(selected);
    }, [selected]);
    var handleClick = function (e) {
        var node = e.target;
        var rect = node.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        if (typeof selected === 'undefined') {
            setClicked(!clicked);
        }
        onClick && onClick(e);
    };
    return (jsxs(ToggleButtonStyle, __assign({ positionInGroup: positionInGroup, selected: clicked, theme: theme || DEFAULT_THEME, ref: ref, onClick: function (e) { return handleClick(e); }, style: style, className: className }, { children: [jsx(ButtonContentStyle, { children: children }), isRippling && jsx(ButtonRippleStyle, { left: coords.x, top: coords.y })] })));
});

var ToggleButtonGroup = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, exclusive = props.exclusive, orientation = props.orientation;
    var _a = useState(Array(children.length).fill(false)), selectedButtons = _a[0], setSelectedButtons = _a[1];
    var handleToggleButtonClick = function (index) {
        if (exclusive) {
            var newSelectedButtons = Array(children.length).fill(false);
            newSelectedButtons[index] = !selectedButtons[index];
            setSelectedButtons(newSelectedButtons);
        }
        else {
            var newSelectedButtons = __spreadArray([], selectedButtons, true);
            newSelectedButtons[index] = !newSelectedButtons[index];
            setSelectedButtons(__spreadArray(__spreadArray([], selectedButtons, true), [selectedButtons[index]], false));
        }
    };
    return (jsx(ToggleButtonGroupStyle, __assign({ orientation: orientation || 'horizontal', ref: ref, style: style, className: className }, { children: children.map(function (child, index) { return (jsx(ToggleButton, __assign({ positionInGroup: index === 0 ? 'first' : index === (children.length - 1) ? 'last' : undefined, selected: selectedButtons[index], onClick: function () { return handleToggleButtonClick(index); } }, { children: child }), index)); }) })));
});

var InputStyle = styled.input(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n\tborder: none;\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n"], ["\n\tborder: none;\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n"])));
var SelectWrapperStyle = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n\tposition: relative;\n"], ["\n\tposition: relative;\n"])));
var SelectStyle = styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tposition: relative;\n\tborder: none;\n\t/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */\n\tborder: 1px solid rgba(144, 144, 144, 0.3);\n\tborder-radius: 4px;\n\tbackground-color: #ffffff;\n\tfont-size: 1em;\n\tpadding: 12px 8px;\n\tcursor: pointer;\n\n\t& > span {\n\t\tfont-weight: 600;\n\t}\n\n\t& > svg {\n\t\ttransition: all 0.3s;\n\t}\n\n\t", "\n"], ["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tposition: relative;\n\tborder: none;\n\t/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */\n\tborder: 1px solid rgba(144, 144, 144, 0.3);\n\tborder-radius: 4px;\n\tbackground-color: #ffffff;\n\tfont-size: 1em;\n\tpadding: 12px 8px;\n\tcursor: pointer;\n\n\t& > span {\n\t\tfont-weight: 600;\n\t}\n\n\t& > svg {\n\t\ttransition: all 0.3s;\n\t}\n\n\t", "\n"])), function (props) {
    return props.rotate && css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n\t\t\t& > svg {\n\t\t\t\ttransform: rotate(180deg);\n\t\t\t}\n\t\t"], ["\n\t\t\t& > svg {\n\t\t\t\ttransform: rotate(180deg);\n\t\t\t}\n\t\t"])));
});
var OptionsWrapperStyle = styled.div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n\tposition: absolute;\n\tborder: ", " solid rgba(144, 144, 144, 0.3);\n\tborder-radius: 4px;\n\tbackground-color: #ffffff;\n\tfont-size: 1em;\n\tfont-weight: 600;\n\tmargin-top: 8px;\n\tpadding: 0;\n\ttransition: all 0.2s ease-in-out;\n\tmax-height: ", ";\n\toverflow: hidden;\n\twidth: 100%;\n"], ["\n\tposition: absolute;\n\tborder: ", " solid rgba(144, 144, 144, 0.3);\n\tborder-radius: 4px;\n\tbackground-color: #ffffff;\n\tfont-size: 1em;\n\tfont-weight: 600;\n\tmargin-top: 8px;\n\tpadding: 0;\n\ttransition: all 0.2s ease-in-out;\n\tmax-height: ", ";\n\toverflow: hidden;\n\twidth: 100%;\n"])), function (props) { return (props.show ? '1px' : 0); }, function (props) { return (props.show ? '100vh' : 0); });
var OptionsListStyle = styled.ul(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n"], ["\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n"])));
var OptionStyle = styled.li(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n\tcursor: pointer;\n\tpadding: 12px 24px 12px 24px;\n\tmargin: 8px 0px 8px 0px;\n\tfont-weight: 500;\n\n\t&:hover {\n\t\t/* opacity: 0.8; */\n\t\tbackground-color: rgba(144, 144, 144, 0.3);\n\t}\n"], ["\n\tcursor: pointer;\n\tpadding: 12px 24px 12px 24px;\n\tmargin: 8px 0px 8px 0px;\n\tfont-weight: 500;\n\n\t&:hover {\n\t\t/* opacity: 0.8; */\n\t\tbackground-color: rgba(144, 144, 144, 0.3);\n\t}\n"])));
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7$1;

var Input = forwardRef(function (props, ref) {
    var style = props.style, className = props.className, theme = props.theme, value = props.value, defaultValue = props.defaultValue, defaultChecked = props.defaultChecked, type = props.type, placeholder = props.placeholder, onChange = props.onChange, onFocus = props.onFocus;
    return (jsx(InputStyle, { onChange: onChange, onFocus: onFocus, ref: ref, value: value, defaultValue: defaultValue, defaultChecked: defaultChecked, placeholder: placeholder, type: type, theme: theme, className: className, style: style }));
});

var Select = forwardRef(function (props, ref) {
    var theme = props.theme, placeholder = props.placeholder, defaultValue = props.defaultValue, options = props.options, className = props.className, style = props.style, onChange = props.onChange;
    var _a = useState(), selectedOption = _a[0], setSelectedOption = _a[1];
    var _b = useState(false), showOptions = _b[0], setShowOptions = _b[1];
    var getOption = function (value) {
        return options.find(function (option) { return option.value === value; });
    };
    useEffect(function () {
        if (defaultValue) {
            var option = getOption(defaultValue);
            setSelectedOption(option);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultValue]);
    var handleOptionClick = function (option) {
        setSelectedOption(option);
        setShowOptions(false);
        if (onChange) {
            onChange(option);
        }
    };
    return (jsxs(SelectWrapperStyle, __assign({ className: className, style: style, theme: theme }, { children: [jsxs(SelectStyle, __assign({ rotate: showOptions, ref: ref, onClick: function () { return setShowOptions(!showOptions); } }, { children: [jsx("span", { children: (selectedOption && selectedOption.label) || placeholder }), jsxs("svg", __assign({ xmlns: 'http://www.w3.org/2000/svg', height: '24px', viewBox: '0 0 24 24', width: '24px', fill: '#000000' }, { children: [jsx("path", { d: 'M0 0h24v24H0V0z', fill: 'none' }), jsx("path", { d: 'M7 10l5 5 5-5H7z' })] }))] })), jsx(OptionsWrapperStyle, __assign({ show: showOptions }, { children: jsx(OptionsListStyle, { children: options.map(function (option, index) { return (jsx(OptionStyle, __assign({ onClick: function () { return handleOptionClick(option); }, value: option.value }, { children: option.label }), index)); }) }) }))] })));
});

var Dropdown = forwardRef(function (props, ref) {
    var theme = props.theme, className = props.className, style = props.style, children = props.children;
    var _a = useState(false), show = _a[0], setShow = _a[1];
    useEffect(function () {
        setShow(true);
    }, []);
    return (jsx(DropdownWrapperStyle, __assign({ ref: ref, theme: theme, className: className, style: style, show: show }, { children: jsx(DropdownListStyle, __assign({ show: show }, { children: children })) })));
});

var DropdownItem = forwardRef(function (props, ref) {
    var theme = props.theme, className = props.className, style = props.style, children = props.children, onClick = props.onClick;
    return (jsx(DropdownItemStyle, __assign({ onClick: onClick, ref: ref, theme: theme, className: className, style: style }, { children: children })));
});

var SpacerStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\theight: 8px;\n\tmin-width: 8px;\n"], ["\n\theight: 8px;\n\tmin-width: 8px;\n"])));
var ToastStyle = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tposition: fixed;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tz-index: 1000;\n\twidth: 120px;\n\theight: 40px;\n\tborder-radius: 200px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tbackground-color: ", ";\n\tcursor: ", ";\n\ttransition: 0.5s;\n\n\t", "\n"], ["\n\tposition: fixed;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tz-index: 1000;\n\twidth: 120px;\n\theight: 40px;\n\tborder-radius: 200px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tbackground-color: ", ";\n\tcursor: ", ";\n\ttransition: 0.5s;\n\n\t", "\n"])), function (props) { return props.theme.toast.backgroundColor; }, function (props) { return (props.closable ? 'pointer' : 'default'); }, function (props) {
    return (props.position === 'top-left' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\t\ttop: 8px;\n\t\t\t\tleft: ", ";\n\t\t\t"], ["\n\t\t\t\ttop: 8px;\n\t\t\t\tleft: ", ";\n\t\t\t"])), props.show ? '8px' : '-120px')) ||
        (props.position === 'top-center' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t\t\ttop: ", ";\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t"], ["\n\t\t\t\ttop: ", ";\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t"])), props.show ? '8px' : '-120px')) ||
        (props.position === 'top-right' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t\t\t\ttop: 8px;\n\t\t\t\tright: ", ";\n\t\t\t"], ["\n\t\t\t\ttop: 8px;\n\t\t\t\tright: ", ";\n\t\t\t"])), props.show ? '8px' : '-120px')) ||
        (props.position === 'bottom-left' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\t\t\tbottom: 8px;\n\t\t\t\tleft: ", ";\n\t\t\t"], ["\n\t\t\t\tbottom: 8px;\n\t\t\t\tleft: ", ";\n\t\t\t"])), props.show ? '8px' : '-120px')) ||
        (props.position === 'bottom-center' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t\t\t\tbottom: ", ";\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t"], ["\n\t\t\t\tbottom: ", ";\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t"])), props.show ? '8px' : '-120px')) ||
        (props.position === 'bottom-right' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t\t\t\tbottom: 8px;\n\t\t\t\tright: ", ";\n\t\t\t"], ["\n\t\t\t\tbottom: 8px;\n\t\t\t\tright: ", ";\n\t\t\t"])), props.show ? '8px' : '-120px'));
});
var handleIconSize = function (size) {
    switch (size) {
        case 'small':
            return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 32px;\n\t\t\t"], ["\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 32px;\n\t\t\t"])));
        case 'medium':
            return css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\t\t\t\twidth: 64px;\n\t\t\t\theight: 64px;\n\t\t\t"], ["\n\t\t\t\twidth: 64px;\n\t\t\t\theight: 64px;\n\t\t\t"])));
        case 'large':
            return css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\t\t\t\twidth: 128px;\n\t\t\t\theight: 128px;\n\t\t\t"], ["\n\t\t\t\twidth: 128px;\n\t\t\t\theight: 128px;\n\t\t\t"])));
    }
};
var IconStyle = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\t", ";\n\tcolor: ", ";\n\tbackground-color: ", ";\n\n\t& * {\n\t\twidth: fit-content;\n\t\theight: 100%;\n\t}\n"], ["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\t", ";\n\tcolor: ", ";\n\tbackground-color: ", ";\n\n\t& * {\n\t\twidth: fit-content;\n\t\theight: 100%;\n\t}\n"])), function (props) { return handleIconSize(props.size); }, function (props) { return props.theme.icon.color; }, function (props) { return props.theme.icon.backgroundColor; });
var LabelStyle = styled.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: fit-content;\n\tpadding: 12px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: fit-content;\n\tpadding: 12px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;

var Icon = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, theme = props.theme, className = props.className, shape = props.shape, size = props.size;
    return (jsx(IconStyle, __assign({ ref: ref, style: style, theme: theme, className: className, shape: shape || 'circle', size: size || 'medium' }, { children: children })));
});

var Spacer = function (props) {
    return (jsx(SpacerStyle, {}));
};

var Label = forwardRef(function (props, ref) {
    var children = props.children, theme = props.theme, className = props.className, style = props.style, reversed = props.reversed, label = props.label;
    return (jsx(LabelStyle, __assign({ theme: theme, className: className, style: style, ref: ref }, { children: reversed ? (jsxs(Fragment, { children: [jsx("span", { children: label }), children && (jsxs(Fragment, { children: [jsx(Spacer, {}), children] }))] })) : (jsxs(Fragment, { children: [children && (jsxs(Fragment, { children: [children, jsx(Spacer, {})] })), jsx("span", { children: label })] })) })));
});

var Toast = forwardRef(function (props, ref) {
    var children = props.children, className = props.className, style = props.style, position = props.position, duration = props.duration, onClose = props.onClose, closable = props.closable, theme = props.theme;
    var _a = useState(false), show = _a[0], setShow = _a[1];
    useEffect(function () {
        if (duration) {
            var timer_1 = setTimeout(function () { return setShow(false); }, duration);
            return function () { return clearTimeout(timer_1); };
        }
        // eslint-disable-next-line
    }, [show]);
    var toast = function () {
        setShow(true);
    };
    useImperativeHandle(ref, function () { return ({
        toast: function () {
            toast();
        },
    }); });
    var handleClick = function (e) {
        closable && setShow(false);
        onClose && onClose(e);
    };
    return (jsx(ToastStyle, __assign({ closable: closable || false, onClick: handleClick, ref: ref, className: className, style: style, theme: theme, position: position || 'top-center', show: show }, { children: children })));
});

export { Box, Button, Container, Dialog, Dropdown, DropdownItem, FAB, Icon, Input, Label, List, ListItem, MasterDetail, Navbar, NavbarItem, Select, Sidebar, SidebarItem, Spacer, Toast, ToggleButton, ToggleButtonGroup, ToggleSwitch, View, useClickOutside };
//# sourceMappingURL=index.js.map
