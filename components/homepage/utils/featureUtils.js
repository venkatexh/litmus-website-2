import {
  ChaosSVG,
  ExperimentSVG,
  KubernetesSVG,
  ObservabilitySVG,
  WorkflowSVG
} from "@components/SVG/FeatureSVG"

export const featureUtils = [
  {
    title: "ChaosHub",
    content:
      "ChaosHub hosts most of the chaos experiments that are needed for a quick start in Chaos Engineering. These experiments are well tested, highly tunable and declarative.",
    svg: <ChaosSVG />
  },
  {
    title: "Litmus Workflows",
    content:
      "Chaos experiments are chained either in sequence or in parallel to build a chaos scenario. The workflows are declarative, schedulable and browsable. Workflow analytics are also available.",
    svg: <WorkflowSVG />
  },
  {
    title: "Litmus Probes",
    content:
      "Steady state hypothesis can be created and verified using Litmus probes. Various types of probes help users to create complete chaos scenarios close to the real application experience upon failure.",
    svg: <ExperimentSVG />
  },
  {
    title: "Chaos Observability",
    content:
      "Litmus includes Prometheus metrics that can help measure the impact of chaos on the applications real time. Impact of chaos and chaos experiment details can be super imposed on app dashboards.",
    svg: <ObservabilitySVG />
  },
  {
    title: "Multi Tenant for K8s",
    content:
      "Kubernetes namespaces are used as a completely managed environments for individual developers on Kubernetes. All features of Litmus can be used within the Kubernetes namespaces.",
    svg: <KubernetesSVG />
  }
]
