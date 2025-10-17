# Event Automation Level 3

This repo is intended to simplify the copy and paste steps of commands of Event Automation L3. Instead to copy the commands from PDF file, go ahead and use commands from this file.

The commands are identified by the step number of the Original Demo Guide document.

### 2.3.1
```
git clone https://github.com/gomezrjo/cp4i-tz-deployer-yl.git
```

### 2.3.2
```
cd cp4i-tz-deployer-yl
```

### 2.4.1
```
oc apply -f resources/pipeline1.yaml
```

### 2.4.2
```
tkn pipeline start cp4i-demo \
    --use-param-defaults \
    --workspace name=cp4i-ws,volumeClaimTemplateFile=resources/workspace-template.yaml \
    --pod-template resources/pod-template.yaml \
    --param DEFAULT_SC="ocs-storagecluster-ceph-rbd" \
    --param OCP_BLOCK_STORAGE="ocs-storagecluster-ceph-rbd" \
    --param OCP_FILE_STORAGE="ocs-storagecluster-cephfs" \
    --param DEPLOY_ASSET_REPOSITORY_OPERATOR=false \
    --param DEPLOY_API_CONNECT_OPERATOR=false \
    --param DEPLOY_APP_CONNECT_OPERATOR=false \
    --param DEPLOY_DATAPOWER_GATEWAY_OPERATOR=false \
    --param DEPLOY_ASSET_REPO=false \
    --param DEPLOY_API_CONNECT=false \
    --param DEPLOY_ACE_SWITCH_SERVER=false \
    --param DEPLOY_ACE_DESIGNER=false \
    --param DEPLOY_ACE_DASHBOARD=false \
    --param DEPLOY_ACE_INTEGRATION_SERVER=false \
    --param DEPLOY_QUEUE_MANAGER=false

```

### 2.4.3
```
tkn pipelinerun logs cp4i-demo-run-???? -f -n default 
```

### 2.5.1
```
cd ..
```

### 2.5.2
```
git clone https://github.com/ibm-integration/eventautomationL3.git
```

### 2.5.3
```
cd eventautomationL3
```

### 2.5.4
```
oc apply -f resources/02a-es-initial-config-jgr-users.yaml -n tools
```

### 2.5.5
```
./deploy-helpers.sh
```

### 2.5.6.a
```
scripts/08c-event-streams-kafka-connect-config.sh
```

### 2.5.6.b
```
oc get kafkaconnects jgr-connect-cluster -n tools -o jsonpath='{.status.conditions[0].type}';echo
```

### 2.5.7.a
```
scripts/08e-event-streams-kafka-connector-datagen-config.sh
```

### 2.5.7.b
```
oc get kafkaconnector -n tools
```

### 3.1.3.2
```
apiVersion: eventstreams.ibm.com/v1beta2
kind: KafkaConnector
metadata:
  name: mq-connector
  namespace: tools
  labels:
    eventstreams.ibm.com/cluster: jgr-connect-cluster
spec:
  autoRestart:
    enabled: true
  class: com.ibm.eventstreams.connect.mqsource.MQSourceConnector
  tasksMax: 1
  config:
    # the Kafka topic to produce to
    topic: ORDERS
    # the MQ queue to get messages from
    mq.queue: TO.KAFKA
    # connection details for the queue manager
    mq.queue.manager: orders
    mq.connection.name.list: orders-ibm-mq(1414)
    mq.channel.name: SYSTEM.DEF.SVRCONN
    # format of the messages to transfer
    mq.message.body.jms: true
    mq.record.builder: com.ibm.eventstreams.connect.mqsource.builders.JsonRecordBuilder
    mq.connection.mode: client
    key.converter: org.apache.kafka.connect.storage.StringConverter
    value.converter: org.apache.kafka.connect.json.JsonConverter
    # whether to send the schema with the messages
    key.converter.schemas.enable: false
    value.converter.schemas.enable: false
```

### 3.2.2.4
```
{
  "customerid": "acb3eb65-98a1-45c2-84d4-f5df157862b4",
  "customername": "Emilio Quitzon",
  "registered": "2023-10-24 19:20:35.638"
}
```

### 3.2.3.4
```
{
  "quantity": 9,
  "price": 197.09,
  "customerid": "a7d1586b-ced1-462f-9e44-14e9e5013540",
  "description": "Composite Oversize 28in Tennis Racket",
  "id": "1eba7af9-b748-4754-b750-3459e589dccf",
  "region": "EMEA",
  "ordertime": "2023-10-24 19:26:04.839",
  "customer": "Reed McKenzie DDS"
}
```
