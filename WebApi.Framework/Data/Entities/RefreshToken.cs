using System;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Framework.Entities
{
    public class RefreshToken
    {
        [Key]
        public string RefreshTokenId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Subject { get; set; }

        [Required]
        [MaxLength(50)]
        public string ClientId { get; set; }

        public DateTime IssuedOn { get; set; }
        public DateTime ExpiresOn { get; set; }

        [Required]
        public string ProtectedTicket { get; set; }
    }
}