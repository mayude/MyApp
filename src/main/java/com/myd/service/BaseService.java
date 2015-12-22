package com.myd.service;

import java.util.List;

import com.myd.utils.Page;
import com.myd.utils.Pageable;

public interface BaseService<T> {
	/**
	 * 获取所有数据
	 * @param id
	 * @return
	 */
	List<T> getAll(T entity);
	
	/**
	 * 分页获取数据
	 * @param pageable
	 * @return
	 */
	Page<T> findPage(Pageable pageable, T entity);
	
	/**
	 * 保存数据
	 * @param entity
	 */
	int save(T entity);
	
	/**
	 * 删除数据
	 * 支持批量删除
	 * @param idList
	 */
	int delete(List<String> idList);
}
