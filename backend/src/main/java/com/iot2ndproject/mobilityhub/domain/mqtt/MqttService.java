package com.iot2ndproject.mobilityhub.domain.mqtt;

import lombok.RequiredArgsConstructor;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.integration.mqtt.support.MqttHeaders;
import org.springframework.stereotype.Service;
import org.springframework.messaging.Message;

@Service
@RequiredArgsConstructor
public class MqttService {
    @ServiceActivator(inputChannel = "mqttInputChannel")
    public void handleMessage(Message<String> message) {
        String payload = message.getPayload();
        String topic = (String) message.getHeaders().get(MqttHeaders.RECEIVED_TOPIC);
        System.out.println("Received Message: " + payload);
        System.out.println("Received Topic: " + topic);

        // TODO: 토픽별 비즈니스 로직 처리
        // 예: DB 저장, 다른 서비스 호출 등
    }
}