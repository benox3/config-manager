Vim�UnDo� �z�l+�km
:�\)Rc
I�|H{-�i���   �                                   `Ӥ�     _�                              ����                                                                                                                                                                                                                                                                                                                                                             `Ӥ�     �               �   0// Code generated by protoc-gen-go. DO NOT EDIT.   // versions:   // 	protoc-gen-go v1.25.0-devel   // 	protoc        v3.13.0   0// source: offerservice/v2beta1/activities.proto       package offerv2beta1       import (   ?	protoreflect "google.golang.org/protobuf/reflect/protoreflect"   9	protoimpl "google.golang.org/protobuf/runtime/protoimpl"   	reflect "reflect"   	sync "sync"   )       const (   ?	// Verify that this generated code is sufficiently up-to-date.   8	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)   =	// Verify that runtime/protoimpl is sufficiently up-to-date.   8	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)   )       X// GetLatestOfferRequest dictates the structure of the input to GetLatestOffer activity.   #type GetLatestOfferRequest struct {   %	state         protoimpl.MessageState   "	sizeCache     protoimpl.SizeCache   &	unknownFields protoimpl.UnknownFields       n	ListingId   string `protobuf:"bytes,1,opt,name=listing_id,json=listingId,proto3" json:"listing_id,omitempty"`   t	CompanyRole string `protobuf:"bytes,2,opt,name=company_role,json=companyRole,proto3" json:"company_role,omitempty"`   }       )func (x *GetLatestOfferRequest) Reset() {   	*x = GetLatestOfferRequest{}   	if protoimpl.UnsafeEnabled {   ?		mi := &file_offerservice_v2beta1_activities_proto_msgTypes[0]   8		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))   		ms.StoreMessageInfo(mi)   	}   }       1func (x *GetLatestOfferRequest) String() string {   &	return protoimpl.X.MessageStringOf(x)   }       /func (*GetLatestOfferRequest) ProtoMessage() {}       Efunc (x *GetLatestOfferRequest) ProtoReflect() protoreflect.Message {   >	mi := &file_offerservice_v2beta1_activities_proto_msgTypes[0]   )	if protoimpl.UnsafeEnabled && x != nil {   8		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))   "		if ms.LoadMessageInfo() == nil {   			ms.StoreMessageInfo(mi)   		}   		return ms   	}   	return mi.MessageOf(x)   }       I// Deprecated: Use GetLatestOfferRequest.ProtoReflect.Descriptor instead.   <func (*GetLatestOfferRequest) Descriptor() ([]byte, []int) {   J	return file_offerservice_v2beta1_activities_proto_rawDescGZIP(), []int{0}   }       7func (x *GetLatestOfferRequest) GetListingId() string {   	if x != nil {   		return x.ListingId   	}   
	return ""   }       9func (x *GetLatestOfferRequest) GetCompanyRole() string {   	if x != nil {   		return x.CompanyRole   	}   
	return ""   }       \// GetLAtestOfferResponse dictates the structure of the output from GetLatestOffer activity.   $type GetLatestOfferResponse struct {   %	state         protoimpl.MessageState   "	sizeCache     protoimpl.SizeCache   &	unknownFields protoimpl.UnknownFields       d	OfferId string `protobuf:"bytes,1,opt,name=offer_id,json=offerId,proto3" json:"offer_id,omitempty"`   }       *func (x *GetLatestOfferResponse) Reset() {   	*x = GetLatestOfferResponse{}   	if protoimpl.UnsafeEnabled {   ?		mi := &file_offerservice_v2beta1_activities_proto_msgTypes[1]   8		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))   		ms.StoreMessageInfo(mi)   	}   }       2func (x *GetLatestOfferResponse) String() string {   &	return protoimpl.X.MessageStringOf(x)   }       0func (*GetLatestOfferResponse) ProtoMessage() {}       Ffunc (x *GetLatestOfferResponse) ProtoReflect() protoreflect.Message {   >	mi := &file_offerservice_v2beta1_activities_proto_msgTypes[1]   )	if protoimpl.UnsafeEnabled && x != nil {   8		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))   "		if ms.LoadMessageInfo() == nil {   			ms.StoreMessageInfo(mi)   		}   		return ms   	}   	return mi.MessageOf(x)   }       J// Deprecated: Use GetLatestOfferResponse.ProtoReflect.Descriptor instead.   =func (*GetLatestOfferResponse) Descriptor() ([]byte, []int) {   J	return file_offerservice_v2beta1_activities_proto_rawDescGZIP(), []int{1}   }       6func (x *GetLatestOfferResponse) GetOfferId() string {   	if x != nil {   		return x.OfferId   	}   
	return ""   }       Jvar File_offerservice_v2beta1_activities_proto protoreflect.FileDescriptor       @var file_offerservice_v2beta1_activities_proto_rawDesc = []byte{   `	0x0a, 0x25, 0x6f, 0x66, 0x66, 0x65, 0x72, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76,   `	0x32, 0x62, 0x65, 0x74, 0x61, 0x31, 0x2f, 0x61, 0x63, 0x74, 0x69, 0x76, 0x69, 0x74, 0x69, 0x65,   `	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x69, 0x6e, 0x74, 0x75, 0x72, 0x6e, 0x2e,   `	0x6f, 0x66, 0x66, 0x65, 0x72, 0x2e, 0x76, 0x32, 0x62, 0x65, 0x74, 0x61, 0x31, 0x22, 0x59, 0x0a,   `	0x15, 0x47, 0x65, 0x74, 0x4c, 0x61, 0x74, 0x65, 0x73, 0x74, 0x4f, 0x66, 0x66, 0x65, 0x72, 0x52,   `	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x6c, 0x69, 0x73, 0x74, 0x69, 0x6e,   `	0x67, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6c, 0x69, 0x73, 0x74,   `	0x69, 0x6e, 0x67, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x70, 0x61, 0x6e, 0x79,   `	0x5f, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x63, 0x6f, 0x6d,   `	0x70, 0x61, 0x6e, 0x79, 0x52, 0x6f, 0x6c, 0x65, 0x22, 0x33, 0x0a, 0x16, 0x47, 0x65, 0x74, 0x4c,   `	0x61, 0x74, 0x65, 0x73, 0x74, 0x4f, 0x66, 0x66, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,   `	0x73, 0x65, 0x12, 0x19, 0x0a, 0x08, 0x6f, 0x66, 0x66, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01,   `	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6f, 0x66, 0x66, 0x65, 0x72, 0x49, 0x64, 0x42, 0x0e, 0x5a,   `	0x0c, 0x6f, 0x66, 0x66, 0x65, 0x72, 0x76, 0x32, 0x62, 0x65, 0x74, 0x61, 0x31, 0x62, 0x06, 0x70,   	0x72, 0x6f, 0x74, 0x6f, 0x33,   }       var (   A	file_offerservice_v2beta1_activities_proto_rawDescOnce sync.Once   l	file_offerservice_v2beta1_activities_proto_rawDescData = file_offerservice_v2beta1_activities_proto_rawDesc   )       Ffunc file_offerservice_v2beta1_activities_proto_rawDescGZIP() []byte {   C	file_offerservice_v2beta1_activities_proto_rawDescOnce.Do(func() {   �		file_offerservice_v2beta1_activities_proto_rawDescData = protoimpl.X.CompressGZIP(file_offerservice_v2beta1_activities_proto_rawDescData)   	})   >	return file_offerservice_v2beta1_activities_proto_rawDescData   }       Zvar file_offerservice_v2beta1_activities_proto_msgTypes = make([]protoimpl.MessageInfo, 2)   Gvar file_offerservice_v2beta1_activities_proto_goTypes = []interface{}{   Q	(*GetLatestOfferRequest)(nil),  // 0: inturn.offer.v2beta1.GetLatestOfferRequest   R	(*GetLatestOfferResponse)(nil), // 1: inturn.offer.v2beta1.GetLatestOfferResponse   }   Avar file_offerservice_v2beta1_activities_proto_depIdxs = []int32{   3	0, // [0:0] is the sub-list for method output_type   2	0, // [0:0] is the sub-list for method input_type   4	0, // [0:0] is the sub-list for extension type_name   3	0, // [0:0] is the sub-list for extension extendee   0	0, // [0:0] is the sub-list for field type_name   }       Afunc init() { file_offerservice_v2beta1_activities_proto_init() }   8func file_offerservice_v2beta1_activities_proto_init() {   7	if File_offerservice_v2beta1_activities_proto != nil {   		return   	}   	if !protoimpl.UnsafeEnabled {   l		file_offerservice_v2beta1_activities_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {   .			switch v := v.(*GetLatestOfferRequest); i {   
			case 0:   				return &v.state   
			case 1:   				return &v.sizeCache   
			case 2:   				return &v.unknownFields   			default:   				return nil   			}   		}   l		file_offerservice_v2beta1_activities_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {   /			switch v := v.(*GetLatestOfferResponse); i {   
			case 0:   				return &v.state   
			case 1:   				return &v.sizeCache   
			case 2:   				return &v.unknownFields   			default:   				return nil   			}   		}   	}   	type x struct{}   	out := protoimpl.TypeBuilder{   		File: protoimpl.DescBuilder{   0			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),   E			RawDescriptor: file_offerservice_v2beta1_activities_proto_rawDesc,   			NumEnums:      0,   			NumMessages:   2,   			NumExtensions: 0,   			NumServices:   0,   		},   H		GoTypes:           file_offerservice_v2beta1_activities_proto_goTypes,   H		DependencyIndexes: file_offerservice_v2beta1_activities_proto_depIdxs,   I		MessageInfos:      file_offerservice_v2beta1_activities_proto_msgTypes,   
	}.Build()   6	File_offerservice_v2beta1_activities_proto = out.File   9	file_offerservice_v2beta1_activities_proto_rawDesc = nil   9	file_offerservice_v2beta1_activities_proto_goTypes = nil   9	file_offerservice_v2beta1_activities_proto_depIdxs = nil   }5�5��