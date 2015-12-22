package com.myd.serviceimpl;

import com.myd.mapper.StaffMapper;
import com.myd.service.StaffService;
import com.myd.utils.Page;
import com.myd.utils.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by myd on 15/10/21.
 */
@Service("staffServiceImpl")
public class StaffServiceImpl<Staff> implements StaffService<Staff> {

    @Autowired
    public StaffMapper<Staff> staffMapper;

    @Override
    public List<Staff>  getAll(Staff staff)
    {
        return this.staffMapper.getall(staff);
    }

    /**
     * 保存员工信息
     * @param staff
     */
    @Override
    public int save(Staff staff){
       return this.staffMapper.save(staff);
    }

    /**
     * 删除员工信息，支持批量删除
     * @param idList
     */
    @Override
    public int delete(List<String> idList) {
       return this.staffMapper.delete(idList);
    }

    /**
     * 获取员工列表，分页获取
     * @param pageable
     * @param staff
     * @return
     */
    @Override
    public Page<Staff> findPage(Pageable pageable,Staff staff)
    {
        Map<String,Object> map=new HashMap();
        map.put("pageable",pageable);
        map.put("staff",staff);
        List<Staff> list=this.getAll(staff);
        List<Staff> staffs=this.staffMapper.findpage(map);
        Page<Staff> page=new Page<>();
        page.setRows(staffs);
        page.setTotalCount(staffs.size());
        page.setPage(pageable.getPage());
        page.setTotal(list.size());
        return page;
    }
}
