package com.myd.controller;

import java.util.*;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;
import com.myd.entity.User;
import com.myd.service.UserService;
import com.myd.utils.Page;
import com.myd.utils.Pageable;

@Controller("userController")
@RequestMapping("/user")
public class UserController {
	/**
	 * 注入service
	 */
	@Resource(name = "userServiceImpl")
	public UserService<User> userService;
	
    /**
     * 获取用户列表
     * @return
     */
    @RequestMapping(value = "/list", method = {RequestMethod.POST,RequestMethod.GET})
    @ResponseBody
	public Page<User> list(Pageable pageable,User user)
	{
    	return userService.findPage(pageable,user);
	}
    
    /**
     * 保存用户操作
     * @parama user 用户实体
     * @return AjaxMessage 保存操作提示消息
     */
    @RequestMapping(value = "/save", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public void save(String datas) {
        System.out.println("保存");
        System.out.println("datas" + datas);
        try {
            List<User> users = JSON.parseArray(datas, User.class);
            for (User user : users) {
                this.userService.save(user);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        //return this.list();
    }
    
    /**
     * 根据主键批量删除
     * @param ids
     */
    @RequestMapping(value = "/delete",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public void delete(String ids)
    {
    	System.out.println("删除"+ids);
        try{
        	String[] tmps = ids.split(",");
        	if(null != tmps && tmps.length > 0) {
        		List<String> idList = new ArrayList<String>();
        		for(String s: tmps) {
        			idList.add(s);
        		}
        		
        		this.userService.delete(idList);
        	}
        }catch(Exception e){
        	e.printStackTrace();
        } 
    }
    
    /**
     * 获取所有的列表
     * @param user
     * @return
     */
    @RequestMapping("/listAll")
    public ModelAndView listAll(User user){
        List<User> personList = userService.getAll(user);
        ModelAndView model = new ModelAndView();
        model.addObject("personList", personList);
        model.setViewName("/person.jsp");
        return model;
    }

    @RequestMapping("/session")
    @ResponseBody
    public Map<String,Object> session(){
        User loginUser=new User();
        loginUser.setUser_number("com/myd");
        loginUser.setUser_name("马玉德");
        loginUser.setFk_roles_pk("研发部");
        loginUser.setUser_pk("1");
        Map<String,Object> map =new HashMap<>();
        map.put("loginUser",loginUser);
        return map;
    }
}

