package com.myd.utils;

import java.io.Serializable;

/**
 * @author myd
 * 前端数据分页分装类
 *
 */
public class Pageable implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 当前页面 - 默认为1
	 */
	protected int page = 1;
	/**
	 * 每页记录数 - 默认为25
	 */
	protected int limit = 25;
	/**
	 * 起始记录标识
	 */
	protected int start = 0;
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	
	
}
