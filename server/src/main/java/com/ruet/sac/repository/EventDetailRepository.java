package com.ruet.sac.repository;

import com.ruet.sac.entity.EventDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EventDetailRepository extends JpaRepository<EventDetail, Integer> {
    @Query("Select e.id,e.eventName,e.eventDate,e.registrationDeadline,e.eventVenue from EventDetail e where e.registrationDeadline>=CURRENT_DATE() and e.status>0  order by e.id desc")
    List<Object[]> getAllRunningRegistrationEvents();

    @Query("Select e.id,e.eventName,e.eventDescription,e.eventDate,e.registrationDeadline,e.eventVenue from EventDetail e where e.id=:eventId and e.registrationDeadline>=CURRENT_DATE() and e.status>0  order by e.id desc")
    Object[] getEventDetails(Integer eventId);
}