package server

import (
	"context"
	"sysmon/proto/sysmonpb"
)

type GRPCServer struct {
	sysmonpb.UnimplementedSysmonServiceServer
}

func NewServer() *GRPCServer {
	return new(GRPCServer)
}

func (s *GRPCServer) Ping(
	ctxt context.Context, request *sysmonpb.PingRequest,
) (*sysmonpb.PingResponse, error) {
	response := &sysmonpb.PingResponse{
		Body: "pong",
	}
	return response, nil
}
