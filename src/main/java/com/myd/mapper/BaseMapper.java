package com.myd.mapper;

import java.util.List;
import java.util.Map;

public interface BaseMapper<T> {
	/**
	 * 返回用户列表
	 * @param id
	 * @return User
	 */
	List<T> getall(T entity);
	
	/**
	 * 分页返回数据
	 * @param map
	 * @return
	 */
	List<T> findpage(Map<String, Object> map);
	
	/**
	 * 保存数据
	 * @param user
	 */
	int save(T entity);
	
	/**
	 * 删除数据
	 * @param list
	 */
	int delete(List<String> list);
}
