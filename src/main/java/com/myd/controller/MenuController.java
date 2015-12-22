package com.myd.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.alibaba.fastjson.JSON;
import com.myd.entity.Menu;
import com.myd.service.MenuService;
import com.myd.utils.Page;
import com.myd.utils.Pageable;

@Controller("menuController")
@RequestMapping("/menu")
public class MenuController {
	/**
	 * 注入service
	 */
	@Resource(name = "menuServiceImpl")
	public MenuService<Menu> menuService;
	
    /**
     * 获取用户列表
     * @return
     */
    @RequestMapping(value = "/list", method = {RequestMethod.POST,RequestMethod.GET})
    @ResponseBody
	public Page<Menu> list(Pageable pageable,Menu menu)
	{
    	return menuService.findPage(pageable,menu);
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
            List<Menu> menus = JSON.parseArray(datas, Menu.class);
            for (Menu menu : menus) {
                this.menuService.save(menu);
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
        		
        		this.menuService.delete(idList);
        	}
        }catch(Exception e){
        	e.printStackTrace();
        } 
    }

}

