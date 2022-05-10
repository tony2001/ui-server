// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: temporal/api/enums/v1/schedule.proto

package enums

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	math "math"
	strconv "strconv"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// ScheduleOverlapPolicy controls what happens when a workflow would be started
// by a schedule, and is already running.
type ScheduleOverlapPolicy int32

const (
	SCHEDULE_OVERLAP_POLICY_UNSPECIFIED ScheduleOverlapPolicy = 0
	// SCHEDULE_OVERLAP_POLICY_SKIP (default) means don't start anything. When the
	// workflow completes, the next scheduled event after that time will be considered.
	SCHEDULE_OVERLAP_POLICY_SKIP ScheduleOverlapPolicy = 1
	// SCHEDULE_OVERLAP_POLICY_BUFFER_ONE means start the workflow again soon as the
	// current one completes, but only buffer one start in this way. If another start is
	// supposed to happen when the workflow is running, and one is already buffered, then
	// only the first one will be started after the running workflow finishes.
	SCHEDULE_OVERLAP_POLICY_BUFFER_ONE ScheduleOverlapPolicy = 2
	// SCHEDULE_OVERLAP_POLICY_BUFFER_ALL means buffer up any number of starts to all
	// happen sequentially, immediately after the running workflow completes.
	SCHEDULE_OVERLAP_POLICY_BUFFER_ALL ScheduleOverlapPolicy = 3
	// SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER means that if there is another workflow
	// running, cancel it, and start the new one after the old one completes cancellation.
	SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER ScheduleOverlapPolicy = 4
	// SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER means that if there is another workflow
	// running, terminate it and start the new one immediately.
	SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER ScheduleOverlapPolicy = 5
	// SCHEDULE_OVERLAP_POLICY_ALLOW_ALL means start any number of concurrent workflows.
	// Note that with this policy, last completion result and last failure will not be
	// available since workflows are not sequential.
	SCHEDULE_OVERLAP_POLICY_ALLOW_ALL ScheduleOverlapPolicy = 6
)

var ScheduleOverlapPolicy_name = map[int32]string{
	0: "Unspecified",
	1: "Skip",
	2: "BufferOne",
	3: "BufferAll",
	4: "CancelOther",
	5: "TerminateOther",
	6: "AllowAll",
}

var ScheduleOverlapPolicy_value = map[string]int32{
	"Unspecified":    0,
	"Skip":           1,
	"BufferOne":      2,
	"BufferAll":      3,
	"CancelOther":    4,
	"TerminateOther": 5,
	"AllowAll":       6,
}

func (ScheduleOverlapPolicy) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_51815b037fe4050f, []int{0}
}

func init() {
	proto.RegisterEnum("temporal.api.enums.v1.ScheduleOverlapPolicy", ScheduleOverlapPolicy_name, ScheduleOverlapPolicy_value)
}

func init() {
	proto.RegisterFile("temporal/api/enums/v1/schedule.proto", fileDescriptor_51815b037fe4050f)
}

var fileDescriptor_51815b037fe4050f = []byte{
	// 354 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0xd2, 0xbf, 0x4a, 0xc3, 0x40,
	0x1c, 0xc0, 0xf1, 0x5c, 0xd4, 0x0e, 0x07, 0x42, 0x08, 0x14, 0x3a, 0xc8, 0x61, 0xb5, 0x5a, 0x51,
	0x48, 0x08, 0x6e, 0x71, 0x4a, 0xd3, 0x2b, 0x0d, 0x9e, 0x49, 0x48, 0xd2, 0x8a, 0x2e, 0x21, 0xd6,
	0xa0, 0x07, 0xa9, 0x39, 0xfa, 0x0f, 0xdc, 0x7c, 0x04, 0x1f, 0x43, 0x9c, 0x5c, 0x7c, 0x07, 0xc7,
	0x8e, 0x1d, 0xed, 0x75, 0x11, 0xa7, 0x3e, 0x82, 0x18, 0x1a, 0x50, 0x30, 0xe0, 0x76, 0xdc, 0x7d,
	0xb8, 0xdf, 0xf0, 0xfd, 0xc1, 0xda, 0x28, 0xee, 0xb3, 0x74, 0x10, 0x25, 0x6a, 0xc4, 0xa8, 0x1a,
	0xdf, 0x8d, 0xfb, 0x43, 0x75, 0xa2, 0xa9, 0xc3, 0xde, 0x6d, 0x7c, 0x3d, 0x4e, 0x62, 0x85, 0x0d,
	0xd2, 0x51, 0x2a, 0x97, 0x73, 0xa5, 0x44, 0x8c, 0x2a, 0x99, 0x52, 0x26, 0xda, 0xe1, 0x8b, 0x08,
	0xcb, 0xfe, 0x4a, 0x3a, 0x93, 0x78, 0x90, 0x44, 0xcc, 0x4d, 0x13, 0xda, 0xbb, 0x97, 0xeb, 0x70,
	0xd7, 0x37, 0xdb, 0xb8, 0xd9, 0x21, 0x38, 0x74, 0xba, 0xd8, 0x23, 0x86, 0x1b, 0xba, 0x0e, 0xb1,
	0xcc, 0x8b, 0xb0, 0x63, 0xfb, 0x2e, 0x36, 0xad, 0x96, 0x85, 0x9b, 0x92, 0x20, 0x6f, 0xc3, 0xad,
	0x22, 0xe8, 0x9f, 0x5a, 0xae, 0x04, 0xe4, 0x7d, 0xb8, 0x53, 0x24, 0x1a, 0x9d, 0x56, 0x0b, 0x7b,
	0xa1, 0x63, 0x63, 0x49, 0xfc, 0x87, 0x33, 0x08, 0x91, 0xd6, 0xe4, 0x03, 0x58, 0x2b, 0x72, 0xa6,
	0x61, 0x9b, 0x98, 0x84, 0x4e, 0xd0, 0xc6, 0x9e, 0xb4, 0x2e, 0x1f, 0xc1, 0x7a, 0x91, 0x0c, 0xb0,
	0x77, 0x66, 0xd9, 0x46, 0x80, 0x57, 0x78, 0x43, 0xde, 0x83, 0xd5, 0x22, 0x6c, 0x10, 0xe2, 0x9c,
	0x67, 0xd3, 0x4b, 0x8d, 0x57, 0x30, 0x9d, 0x23, 0x61, 0x36, 0x47, 0xc2, 0x72, 0x8e, 0xc0, 0x03,
	0x47, 0xe0, 0x89, 0x23, 0xf0, 0xc6, 0x11, 0x98, 0x72, 0x04, 0xde, 0x39, 0x02, 0x1f, 0x1c, 0x09,
	0x4b, 0x8e, 0xc0, 0xe3, 0x02, 0x09, 0xd3, 0x05, 0x12, 0x66, 0x0b, 0x24, 0xc0, 0x0a, 0x4d, 0x95,
	0x3f, 0x1b, 0x34, 0x36, 0xf3, 0x00, 0xee, 0x77, 0x29, 0x17, 0x5c, 0x56, 0x6f, 0x7e, 0x50, 0x9a,
	0xfe, 0xea, 0x7a, 0x92, 0x1d, 0x9e, 0xc5, 0x72, 0x90, 0x03, 0x83, 0x51, 0x05, 0x67, 0x7f, 0x75,
	0xb5, 0x4f, 0xb1, 0x92, 0xdf, 0xeb, 0xba, 0xc1, 0xa8, 0xae, 0x67, 0x2f, 0xba, 0xde, 0xd5, 0xae,
	0x4a, 0xd9, 0x22, 0x1c, 0x7f, 0x05, 0x00, 0x00, 0xff, 0xff, 0x37, 0x40, 0xaf, 0x78, 0x30, 0x02,
	0x00, 0x00,
}

func (x ScheduleOverlapPolicy) String() string {
	s, ok := ScheduleOverlapPolicy_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
