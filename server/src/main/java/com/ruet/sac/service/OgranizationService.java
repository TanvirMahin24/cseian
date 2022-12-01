package com.ruet.sac.service;

import com.ruet.sac.entity.Brunch;
import com.ruet.sac.entity.Institute;
import com.ruet.sac.entity.TableRegistry;
import com.ruet.sac.repository.BrunchRepository;
import com.ruet.sac.repository.InstituteRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OgranizationService {
    @Autowired
    InstituteRepository instituteRepository;

    @Autowired
    BrunchRepository brunchRepository;

    @Autowired
    TableRegistryRepository tableRegistryRepository;


    @Transactional
    Institute registerOrganization(String organizationName)
    {
        // get Primary key of institute table
        TableRegistry r = tableRegistryRepository.getReferenceById(3);
        Integer id = r.getRegistryKey() + 1;
        r.setRegistryKey(id);
        tableRegistryRepository.save(r);

        Institute institute = new Institute();
        institute.setId(id);
        institute.setInstituteName(organizationName);

        instituteRepository.save(institute);
        return institute;
    }

    @Transactional
    Brunch registerBrunch(String brunchName, Integer organizationId)
    {
        // get Primary key of brunch table
        TableRegistry r = tableRegistryRepository.getReferenceById(1);
        Integer id = r.getRegistryKey() + 1;
        r.setRegistryKey(id);
        tableRegistryRepository.save(r);

        Institute institute = instituteRepository.getReferenceById(organizationId);

        Brunch brunch = new Brunch();

        brunch.setId(id);
        brunch.setBrunchName(brunchName);
        brunch.setInstitute(institute);

        brunchRepository.save(brunch);

        return brunch;
    }

    Institute getOrganizationByName(String organizationName)
    {
        if(instituteRepository.getOrganizationIdByName(organizationName)!=null)
            return instituteRepository.getOrganizationIdByName(organizationName);

        return registerOrganization(organizationName);
    }

    Brunch getBrunchByNameAndOrganizationName(String brunchName , String organizationName)
    {
        Integer organizationId = getOrganizationByName(organizationName).getId();

        if(brunchRepository.getBrunchIdByNameAndOrganizationId(brunchName,organizationId)!=null)
        return brunchRepository.getBrunchIdByNameAndOrganizationId(brunchName,organizationId);

        return registerBrunch(brunchName,organizationId);
    }
}
