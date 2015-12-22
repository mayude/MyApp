package com.myd.entity;

import java.io.Serializable;

/**
 * @author myd
 *         用户信息
 */

public class User implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    private String user_pk;//用户主键
    private String user_number;//用户编号
    private String user_name;//用户姓名
    private String user_password;//用户密码
    private String fk_roles_pk;//用户组（存储主键�?
    private String user_sex;//用户性别
    private String user_birthday;//用户生日
    private String fk_station_pk;//用户工位
    private String user_intime;//入职时间
    private String user_phone;//电话
    private String user_email;//邮箱


    public String getUser_pk() {
        return user_pk;
    }

    public void setUser_pk(String user_pk) {
        this.user_pk = user_pk;
    }

    public String getUser_number() {
        return user_number;
    }

    public void setUser_number(String user_number) {
        this.user_number = user_number;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getFk_roles_pk() {
        return fk_roles_pk;
    }

    public void setFk_roles_pk(String fk_roles_pk) {
        this.fk_roles_pk = fk_roles_pk;
    }

    public String getUser_sex() {
        return user_sex;
    }

    public void setUser_sex(String user_sex) {
        this.user_sex = user_sex;
    }

    public String getUser_birthday() {
        return user_birthday;
    }

    public void setUser_birthday(String user_birthday) {
        this.user_birthday = user_birthday;
    }

    public String getFk_station_pk() {
        return fk_station_pk;
    }

    public void setFk_station_pk(String fk_station_pk) {
        this.fk_station_pk = fk_station_pk;
    }

    public String getUser_intime() {
        return user_intime;
    }

    public void setUser_intime(String user_intime) {
        this.user_intime = user_intime;
    }

    public String getUser_phone() {
        return user_phone;
    }

    public void setUser_phone(String user_phone) {
        this.user_phone = user_phone;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    @Override
    public String toString() {
        return "User [user_pk=" + user_pk + ", user_number=" + user_number
                + ", user_name=" + user_name + ", user_password="
                + user_password + ", fk_roles_pk=" + fk_roles_pk
                + ", user_sex=" + user_sex + ", user_birthday=" + user_birthday
                + ", fk_station_pk=" + fk_station_pk + ", user_intime="
                + user_intime + ", user_phone=" + user_phone + ", user_email="
                + user_email + "]";
    }

}
