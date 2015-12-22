package com.myd.entity;

/**
 * Created by myd on 15/10/21.
 */
public class Staff {
    private String staff_pk;
    private String staff_loginname;
    private String staff_name;
    private String staff_password;
    private String fk_roles_pk;
    private String staff_sex;
    private String staff_birthday;
    private String staff_status;
    private String staff_phone;
    private String staff_email;
    private String staff_intime;

    public String getStaff_pk() {
        return staff_pk;
    }

    public void setStaff_pk(String staff_pk) {
        this.staff_pk = staff_pk;
    }

    public String getStaff_loginname() {
        return staff_loginname;
    }

    public void setStaff_loginname(String staff_loginname) {
        this.staff_loginname = staff_loginname;
    }

    public String getStaff_name() {
        return staff_name;
    }

    public void setStaff_name(String staff_name) {
        this.staff_name = staff_name;
    }

    public String getStaff_password() {
        return staff_password;
    }

    public void setStaff_password(String staff_password) {
        this.staff_password = staff_password;
    }

    public String getFk_roles_pk() {
        return fk_roles_pk;
    }

    public void setFk_roles_pk(String fk_roles_pk) {
        this.fk_roles_pk = fk_roles_pk;
    }

    public String getStaff_sex() {
        return staff_sex;
    }

    public void setStaff_sex(String staff_sex) {
        this.staff_sex = staff_sex;
    }

    public String getStaff_birthday() {
        return staff_birthday;
    }

    public void setStaff_birthday(String staff_birthday) {
        this.staff_birthday = staff_birthday;
    }

    public String getStaff_status() {
        return staff_status;
    }

    public void setStaff_status(String staff_status) {
        this.staff_status = staff_status;
    }

    public String getStaff_phone() {
        return staff_phone;
    }

    public void setStaff_phone(String staff_phone) {
        this.staff_phone = staff_phone;
    }

    public String getStaff_email() {
        return staff_email;
    }

    public void setStaff_email(String staff_email) {
        this.staff_email = staff_email;
    }

    public String getStaff_intime() {
        return staff_intime;
    }

    public void setStaff_intime(String staff_intime) {
        this.staff_intime = staff_intime;
    }
}
