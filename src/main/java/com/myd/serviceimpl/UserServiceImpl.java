package com.myd.serviceimpl;

import java.util.List;
import java.util.Map;

import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myd.mapper.UserMapper;
import com.myd.service.UserService;
import com.myd.utils.Page;
import com.myd.utils.Pageable;
@Service("userServiceImpl")
public class UserServiceImpl<User> implements UserService<User> {

	@Autowired
	public UserMapper<User> userMapper;
	
	@Override
	public List<User> getAll(User user) {
		return this.userMapper.getall(user);
	}

	@Override
	public int save(User user) {
		return this.userMapper.save(user);
	}

	@SuppressWarnings("unchecked")
	@Override
	public Page<User> findPage(Pageable pageable,User user) {
		Map<String,Object> map =new HashedMap();
		map.put("pageable", pageable);
		map.put("user", user);
	   	List<User> list=this.getAll(user);
    	List<User> users=this.userMapper.findpage(map);
    	Page<User> page=new Page<>();
    	page.setRows(users);
		page.setTotalCount(users.size());
		page.setPage(pageable.getPage());
		page.setTotal(list.size());
    	return page;
	}

	@Override
	public int  delete(List<String> idList) {
		return this.userMapper.delete(idList);
	}
	

}
