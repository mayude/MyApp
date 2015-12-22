package com.myd.entity;

public class Menu {
    private String menu_pk;        //菜单主键
    private String menu_icon;    //菜单图标
    private String menu_name;    //菜单名称
    private String menu_parent;    //父菜单id
    private String menu_url;    //页面地址

    public String getMenu_pk() {
        return menu_pk;
    }

    public void setMenu_pk(String menu_pk) {
        this.menu_pk = menu_pk;
    }

    public String getMenu_icon() {
        return menu_icon;
    }

    public void setMenu_icon(String menu_icon) {
        this.menu_icon = menu_icon;
    }

    public String getMenu_name() {
        return menu_name;
    }

    public void setMenu_name(String menu_name) {
        this.menu_name = menu_name;
    }

    public String getMenu_parent() {
        return menu_parent;
    }

    public void setMenu_parent(String menu_parent) {
        this.menu_parent = menu_parent;
    }

    public String getMenu_url() {
        return menu_url;
    }

    public void setMenu_url(String menu_url) {
        this.menu_url = menu_url;
    }


}
