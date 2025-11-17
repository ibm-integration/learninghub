# IWHI Level 4 - Event Automation Unified Experience Lab

This repo is intended to simplify the copy and paste steps of commands of Event Automation Unified Experience Lab - IWHI L4. Instead to copy the commands from PDF file, go ahead and use commands from this file.

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
    --param DEPLOY_EVENT_ENDPOINT_MANAGEMENT_OPERATOR=false \
    --param DEPLOY_MQ_OPERATOR=false \
    --param DEPLOY_DATAPOWER_GATEWAY_OPERATOR=false \
    --param DEPLOY_ASSET_REPO=false \
    --param DEPLOY_API_CONNECT=false \
    --param DEPLOY_ACE_SWITCH_SERVER=false \
    --param DEPLOY_ACE_DESIGNER=false \
    --param DEPLOY_ACE_DASHBOARD=false \
    --param DEPLOY_ACE_INTEGRATION_SERVER=false \
    --param DEPLOY_EVENT_ENDPOINT_MANAGEMENT=false \
    --param DEPLOY_QUEUE_MANAGER=false
```

### 2.4.3
```
tkn pipelinerun logs cp4i-demo-run-???? -f -n default 
```

### 2.4.11
```
oc apply -f resources/pipeline2.yaml
```

### 2.4.12
```
tkn pipeline start cp4i-config \
    --namespace default \
    --use-param-defaults \
    --workspace name=cp4i-ws,volumeClaimTemplateFile=resources/workspace-template.yaml \
    --pod-template resources/pod-template.yaml \
    --param OCP_BLOCK_STORAGE="ocs-storagecluster-ceph-rbd" \
    --param OCP_FILE_STORAGE="ocs-storagecluster-cephfs" \
    --param DEPLOY_EVENT_STREAMS_DEMOS="true" \
    --param DEPLOY_LICENSE_SERVICE=”false” \
    --param DEPLOY_API_CONNECT_DEMOS="false" \
    --param DEPLOY_DATAPOWER_DEMOS="false" \
    --param DEPLOY_EVENT_ENDPOINT_MANAGEMENT_DEMOS="false" \
    --param DEPLOY_MQ_DEMOS="false" \
    --param DEPLOY_EXTRA_MQ_DEMOS="false" \
    --param DEPLOY_ACE_DEMOS="false" \
    --param DEPLOY_EA_POSTGRESQL_OPERATOR="false"
```

### 2.4.13
```
tkn pipelinerun logs cp4i-config-run-???? -f -n default
```

### 4.2.11
```
org.apache.kafka.common.security.scram.ScramLoginModule required username="<SCRAM_USER>" password="<SCRAM_PASSWORD>";
```

### 4.4.8
```
{
  "id": "e8d2c3a5-6f7b-4c1d-9e0a-3b4c5d6e7f8g",
  "customer": "Matteo Rossi",
  "customerid": "35a6b7c8-d9e0-4f1g-2h3i-4j5k6l7m8n9o",
  "description": "Brown Men's Leather Wallet",
  "price": 49.50,
  "quantity": 1,
  "region": "APAC",
  "ordertime": "2025-09-28 15:45:01.888"
}
```

### 4.4.29
```
{
    "customer":"Roger Federer"
}
```

### 4.4.50
```
/?customer=Novak+Djokovic
```

### 5.1.4.7
```
`customerid` = 'ST_JODO_US' AND `region` = 'APAC'
```

### 6.2.4
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

