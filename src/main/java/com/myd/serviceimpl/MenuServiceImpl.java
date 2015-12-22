package com.myd.serviceimpl;

import java.util.List;
import java.util.Map;

import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myd.mapper.MenuMapper;
import com.myd.service.MenuService;
import com.myd.utils.Page;
import com.myd.utils.Pageable;
@Service("menuServiceImpl")
public class MenuServiceImpl<Menu> implements MenuService<Menu> {

	@Autowired
	public MenuMapper<Menu> menuMapper;
	
	@Override
	public List<Menu> getAll(Menu menu) {
		System.out.println("service");
		return this.menuMapper.getall(menu);
	}

	@Override
	public int save(Menu menu) {
		//System.out.println("service");
		return this.menuMapper.save(menu);
	}

	@SuppressWarnings("unchecked")
	@Override
	public Page<Menu> findPage(Pageable pageable,Menu menu) {
		Map<String,Object> map =new HashedMap();
		map.put("pageable", pageable);
		map.put("menu", menu);
	   	List<Menu> list=this.getAll(menu);
    	List<Menu> menus=this.menuMapper.findpage(map);
    	Page<Menu> page=new Page<>();
    	page.setRows(menus);
		page.setTotalCount(menus.size());
		page.setPage(pageable.getPage());
		page.setTotal(list.size());
    	return page;
	}

	@Override
	public int delete(List<String> idList) {
		return this.menuMapper.delete(idList);
	}
	

}
