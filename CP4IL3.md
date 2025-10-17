# Cloud Pal for Integration Level 3

This repo is intended to simplify the copy and paste steps of commands of Event Automation L3. Instead to copy the commands from PDF file, go ahead and use commands from this file.

The commands are identified by the step number of the Original Demo Guide document.

### 2.4.1
```
git clone https://github.com/gomezrjo/cp4i-tz-deployer-yl.git
```

### 2.4.2
```
cd cp4i-tz-deployer-yl
```

### 2.5.1
```
oc apply -f resources/pipeline1.yaml
```

### 2.5.2
```
tkn pipeline start cp4i-demo \
    --use-param-defaults \
    --workspace name=cp4i-ws,volumeClaimTemplateFile=resources/workspace-template.yaml \
    --pod-template resources/pod-template.yaml \
    --param DEFAULT_SC="ocs-storagecluster-ceph-rbd" \
    --param OCP_BLOCK_STORAGE="ocs-storagecluster-ceph-rbd" \
    --param OCP_FILE_STORAGE="ocs-storagecluster-cephfs" \
    --param DEPLOY_EVENT_STREAMS_OPERATOR=false \
    --param DEPLOY_EVENT_ENDPOINT_MANAGEMENT_OPERATOR=false \
    --param DEPLOY_EA_FLINK_OPERATOR=false \
    --param DEPLOY_EVENT_PROCESSING_OPERATOR=false \
    --param DEPLOY_MQ_OPERATOR=false \
    --param DEPLOY_EVENT_STREAMS=false \
    --param DEPLOY_EVENT_ENDPOINT_MANAGEMENT=false \
    --param DEPLOY_EA_FLINK=false \
    --param DEPLOY_EVENT_PROCESSING=false \
    --param DEPLOY_QUEUE_MANAGER=false
```

### 2.5.3
```
tkn pipelinerun logs cp4i-demo-run-???? -f -n default 
```
