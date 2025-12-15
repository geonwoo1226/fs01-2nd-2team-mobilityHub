package com.iot2ndproject.mobilityhub.domain.work.dao;

import com.iot2ndproject.mobilityhub.domain.work.entity.WorkInfoEntity;

import java.util.List;

public interface WorkInfoDAO {

    // 전체목록 조회
    List<WorkInfoEntity> findAll();
}
