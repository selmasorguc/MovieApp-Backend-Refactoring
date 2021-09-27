using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Helpers;

namespace API.Interfaces
{
    public interface IMediaService
    {
        Task<List<MediaDto>> GetMediaAsync(MediaParams movieParams);
    }
}